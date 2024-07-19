---
date: 2023-11-30
category:
  - 后端
  - go语言
  - 基础
tag:
  - context
  - go
  - 笔记
author: 极客时间  
icon: devicon:go
---
# Context上下文

<a name="2e134685"></a>

## Go的Context

go1.7是一个变动非常大的版本。一方面官方引入了**Context**来管理多个具有明显父级关系的**GoRoutine**，一方面对原有的代码包进行了大量的修改，让他们都能够支持**Context**。

我们之前已经讲过一个用来管理，编排多个**GoRoutine**的包**sync.WaitGroup**。它能够解决部分场景，但仍然有一些问题未能解决：

1. 如果**GoRoutine**的启动的**总数**无法确定，使用**sync.WaitGroup**会有一定的风险，可能会**Panic**。
2. 使用**sync.WaitGroup**解决多级**GoRoutine**的时候，非常笨，不够简单灵活。

使用**Context**可以比较好的解决这两个问题。
> 自**Context**进入官方包之后，常用的框架全部经历了一次大升级。gin,echo,go-zero,kratos等都有自己封装好的**Context**，并且作为绝大数内置函数的必传参数。

<a name="69fa3701"></a>

### 作用

一句话总结：**Context**是用来让多级**GoRoutine**实现通信的一种工具，底层依赖于**Channel**，并且是并发安全的。
最常用的场景是：

1. 父级**GoRoutine**向子孙级**GoRoutine**同步取消状态。
2. 父级**GoRoutine**向子孙级**GoRoutine**传递一些必要的数据信息。

有一个需要注意的点：每一级**GoRoutine**只能管自己和子孙级，管不了同级和父级。

**waitGroup的常用方式：**
![1](/golang/context1.png)
**context的常用方式：**
![1](/golang/context2.png)

<a name="bc120b21"></a>

### 用法

先看下官方定义好的6个上下文：

```go
//两个默认上下文 这两兄弟都返回一个emptyCtx

//获取一个根节点。相当于拿到了Context的Root节点。注意在代码中不要随便使用。
cbg := context.Background()
//获取一个空节点。理论上可以把他当做根节点，请不要这样搞。这个方法只会用在需要传一个CTX，但实际不产生任何用处时，充当占位符。
context.TODO()

//常用的4种上下文

//常用的一种方法，返回一个可以取消的上下文。当父辈执行取消操作时，会将信号同步给他的子孙们，他们同时也会响应取消当前的操作。
_, cf := context.WithCancel(cbg)
defer cf()

//最常使用的一个方法。带有一个超时机制的上下文。可以手动触发取消也可以在超时之后自动触发取消。
_, cf1 := context.WithTimeout(cbg, 10*time.Second)
cf1()

//不常用的一个方法。 带有一个时间点的上下文。可以手动触发取消也可以在到了时间点之后自动触发取消。
h1, _ := time.ParseDuration("1h")
_, cf2 := context.WithDeadline(cbg, time.Now().Add(h1))
cf2()

//最不常用的方法，通常情况下，我们是不会在上下文里穿一些数据的。最常见的只有传Trace和Token
context.WithValue(cbg, "name", "关注香香编程喵喵喵")
//WithValue 不会响应取消信号，但它的子孙辈如果是可以取消的，则会继续响应。
```

再来看下具体用法：

```go
func testContest2() {
 c0 := context.Background()        //ROOT
 c1, cf1 := context.WithCancel(c0) //c1辈，一个可以取消的上下文

 go func(ctx context.Context) {
  for {
   select {
   case <-ctx.Done(): //响应Context的取消信号
    fmt.Printf("关注香香编程喵喵喵！err:%s\n", ctx.Err())
    return
   default:
    fmt.Printf("喵师傅正在休息！\n")
   }
  }
 }(c1)
 go func(ctx context.Context) {
  for {
   select {
   case <-ctx.Done():
    fmt.Printf("关注香香编程谢谢喵喵喵！err:%s\n", ctx.Err())
    return
   default:
    fmt.Printf("喵师傅正在喝茶！\n")
   }
  }
 }(c1)

 time.Sleep(1 * time.Millisecond)
 cf1() //手动调用终止函数
 time.Sleep(3 * time.Second)
 fmt.Printf("程序终止！")
}
```

> 其他超时类型的Context，用法类似。Context官方包中有一个Context_test，里面也有一些例子。


注意： **取消信号会在Context之间同步，但要不要响应这个信号，由开发者决定**。大多数情况下，你说你的，我干我的。

<a name="38164c8b"></a>

### 实现

Context是官方定义的一个接口，上述的6个Context是针对这个接口的不同实现。

```go
type Context interface {
 //Deadline 返回具体的死线时间。ok代表是否设置过这个时间。
 Deadline() (deadline time.Time, ok bool)

 //Done 又是一个经典用法。返回一个单向通道，类型是空结构体。它返回的就是取消信号。
 Done() <-chan struct{}

 //Err 当Context取消时，获取具体的错误信息。超时还是手动取消。
 Err() error
 //Value 设置变量 不常用
 Value(key interface{}) interface{}
}
```

**context.Background()** 和 **context.TODO()** 在底层实现上是一样的，都返回一个**emptyCtx**。

```go
type emptyCtx int

func (*emptyCtx) Deadline() (deadline time.Time, ok bool) {
 return
}

func (*emptyCtx) Done() <-chan struct{} {
 return nil
}

func (*emptyCtx) Err() error {
 return nil
}

func (*emptyCtx) Value(key any) any {
 return nil
}
```

其他四个都是在下面这个结构体上的封装：

```go
// WithCancel 使用了这个结构体
type cancelCtx struct {
 Context
 mu       sync.Mutex            // 互斥锁，保证上下文并发安全
 done     atomic.Value          // 记录取消的状态
 children map[canceler]struct{} // 记录自己的子辈
 err      error                 // 记录取消时的错误信息
}

// WithTimeout 和 WithDeadline 使用了这个结构体
type timerCtx struct {
 cancelCtx
 timer    *time.Timer
 deadline time.Time
}

// WithValue 使用了这个
type valueCtx struct {
 Context
 key, val any
}
```

详细的，我们不再展开。

这里提一下：
> The bigger the interface, the weaker the abstraction.

Context的整体设计方式是完全贯彻这个思想的，为我们后续设计自己的代码时打了样。

<a name="35f703c0"></a>

## Gin的Context

Gin框架里的Context本质上是对**Context接口**的实现，并增加了许多其他信息，尤其是与WEB相关的信息。

<a name="2dc90225"></a>

### 扩展

gin的Context除了实现接口之外，增加四块内容。

```go
type Context struct {
 //HTTP相关字段
 writermem responseWriter //返回内容
 Request   *http.Request  //Http官方包的Request
 Writer    ResponseWriter //自定义的Response

 //URL相关
 Params   Params        //请求参数，底层是一个切片
 handlers HandlersChain //方法链，一个HandlerFunc数组
 index    int8          //HandlerFunc数组的索引，也是Abort的标志
 fullPath string        //当次请求的全路径

 //原始数据的指针，注意这三个值都是指针。
 engine       *Engine        //gin框架的主引擎
 params       *Params        //请求初始值，没有找到实际用途
 skippedNodes *[]skippedNode //路由中配置的需要跳过的路径节点

 // mu 为Keys增加的读写锁。Map并发不安全，Context又需要并发。
 mu sync.RWMutex

 // Keys 让Context能够提供存储一些数据的能力。Set()和Get()的数据就放在这里。
 Keys map[string]any

 // Errors 是一个error的指针切片，用来存储使用该Context的方法和中间件所产生的Error
 Errors errorMsgs

 // Accepted 用来记录该路径允许请求的类型，就是header里的Accept
 Accepted []string

 // 这两兄弟就是url官方包，gin框架中的多个query的方法，都是在此基础上的封装。
 queryCache url.Values
 formCache  url.Values

 //sameSite Cookie相关的配置字段，只在设置Cookie时使用。
 sameSite http.SameSite
}
```

gin的方法列表，**我们只列举一些关键的方法**，更详细的可以直接去看gin的函数列表和文档。
![1](/golang/context3.png)

<a name="hb5zz"></a>

### 实现

<a name="cf1c9d1e"></a>

#### 实现接口

我们这里主要看下**gin的Context是如何实现官方的接口的**。其他方法要么是复读机，要么是不常用的，这一类我们就不必看了。还有少数是需要关联其他功能，我们后续再逐步展开。

```go
func (c *Context) Deadline() (deadline time.Time, ok bool) {
 // ContextWithFallback默认是false 一般都不会回退的。
 if !c.engine.ContextWithFallback || c.Request == nil || c.Request.Context() == nil {
  return
 }
 //如果允许回退，那么Context会直接回退为Request下的Context。
 return c.Request.Context().Deadline()
}

//省略掉 Done 和 Err 内容同上

// Value 会优先返回元数据中的Key，如果没有才会尝试去Request中的Context中查询。
func (c *Context) Value(key any) any {
 //两种特殊情况
 if key == 0 {
  return c.Request //直接返回Request结构体
 }
 if key == ContextKey {
  return c //直接返回Context本身
 }
 if keyAsString, ok := key.(string); ok {
  if val, exists := c.Get(keyAsString); exists {
   return val
  }
 }
 if !c.engine.ContextWithFallback || c.Request == nil || c.Request.Context() == nil {
  return nil
 }
 return c.Request.Context().Value(key)

}
```

<a name="2cb472ff"></a>

#### 初始化

gin的Context在主引擎中是以**sync.Pool**的方式完成初始化的，也就是说一开始不会有任何**Context**存在，直到第一个请求过来时才会初始化一个**Context**，后续的请求有可能会复用之前的**Context**，这就解释了为什么会有一个**reset()**方法。
> 这是少有的，比较适合**sync.Pool**的使用场景。

看下代码：

```go
func New() *Engine {
 engine := &Engine{
 ...
 }
 //初始化生成一个Context的方法
 engine.pool.New = func() any {
  return engine.allocateContext(engine.maxParams)
 }
 return engine
}

//生成一个gin的Context
func (engine *Engine) allocateContext(maxParams uint16) *Context {
 v := make(Params, 0, maxParams) //声明一个Params的切片，并且直接定义好容量
 skippedNodes := make([]skippedNode, 0, engine.maxSections) 
 //返回一个gin的Context，注意此时的Context还不完整，不能直接使用。
 return &Context{engine: engine, params: &v, skippedNodes: &skippedNodes}
}

//真正获取Context，并且完成初始化的地方。
func (engine *Engine) ServeHTTP(w http.ResponseWriter, req *http.Request) {
 //从池子里拿到一个Context，此时没人能够保证这个Context是新的还是别人用过的。
 c := engine.pool.Get().(*Context) 
 //将两个最核心的部分塞进Context。
 c.writermem.reset(w)
 c.Request = req
 //重置下Context其他属性，无论他是不是二手的，这里都可以保证它是新的。
 c.reset() 
 //开始处理HTTP请求。
 engine.handleHTTPRequest(c)
 //处理完成，将当前用过的Context再放回池子里。
 engine.pool.Put(c)
}
```

<a name="1bbbb204"></a>

### 注意事项

无论是官方包里的Context还是框架里的Context，都会有一些使用原则：

1. 不要把Context放在结构体中，**要以参数的方式传递**，参数类型最好是指针。
2. 以Context作为参数的函数方法，应该把Context作为**第一个参数**，放在第一位。
3. 给一个函数方法传递Context的时候，不要传递nil，如果不知道传递什么，就使用**context.TODO**。
4. Context的**Value方法**可以传递数据，但不要什么数据都往里塞，最好是压根就不用。
5. Context是线程安全的，放心使用。
6. Context值在传达撤销信号的时候是深度优先的。

<a name="687a7e7f"></a>

## 阅读

[https://blog.golang.org/pipelines](https://blog.golang.org/pipelines)

[https://blog.golang.org/context](https://blog.golang.org/context)

[https://draveness.me/golang/docs/part3-runtime/ch06-concurrency/golang-context/](https://draveness.me/golang/docs/part3-runtime/ch06-concurrency/golang-context/)
