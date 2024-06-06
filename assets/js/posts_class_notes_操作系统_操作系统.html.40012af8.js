"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[9408],{9874:(e,l)=>{l.A=(e,l)=>{const t=e.__vccOpts||e;for(const[e,p]of l)t[e]=p;return t}},4195:(e,l,t)=>{t.r(l),t.d(l,{comp:()=>a,data:()=>s});var p=t(2360);const i=[(0,p.Fv)('<h2 id="_1-什么是并发-什么是并行" tabindex="-1"><a class="header-anchor" href="#_1-什么是并发-什么是并行"><span>1. 什么是并发，什么是并行？</span></a></h2><p>并发是指多个任务在同一个时间段内交替进行，通过不断地切换上下文来实现同时执行的效果。</p><p>并行是指多个任务在同一个时间段内实际同时执行，并利用多个处理器或多核CPU的并行计算能力来加速任务的完成。</p><h2 id="_2-中断和轮询有什么区别" tabindex="-1"><a class="header-anchor" href="#_2-中断和轮询有什么区别"><span>2. 中断和轮询有什么区别？</span></a></h2><p>中断和轮询是计算机系统中常用的两种处理方式，它们在处理外部事件和设备响应方面有所不同。中断是一种事件驱动的处理方式，当事件发生时会打断当前程序的执行，立即进行处理。而轮询是一种主动查询的方式，处理器会周期性地检查事件的状态并进行处理。中断适用于需要及时响应的事件，而轮询适用于相对不紧急的事件。</p><h2 id="_3-用户态和内核态是什么" tabindex="-1"><a class="header-anchor" href="#_3-用户态和内核态是什么"><span>3. 用户态和内核态是什么？</span></a></h2><p>用户态只能受限的访问内存，运行所有的应用程序。核心态可以运行操作系统程序，CPU可以访问内存的所有数据，包括外围设备。由于需要限制不同的程序之间的访问能力，防止他们获取别的程序的内存数据，或者获取外围设备的数据，并发送到网络。</p><p>用户态切换到内核态的3种方式：</p><p>系统调用：主动调用，系统调用的机制其核心还是使用了操作系统为用户特别开放的一个中断来实现，例如Linux的int 80h中断。</p><p>异常：当CPU在执行运行在用户态下的程序时，发生了某些事先不可知的异常，比如缺页异常，这时会触发切换内核态处理异常。</p><p>外围设备的中断：当外围设备完成用户请求的操作后，会向CPU发出相应的中断信号，这时CPU会由用户态到内核态的切换。</p><h2 id="_4-进程-线程和协程有什么关系和区别" tabindex="-1"><a class="header-anchor" href="#_4-进程-线程和协程有什么关系和区别"><span>4. 进程，线程和协程有什么关系和区别？</span></a></h2><p>进程是程序执行的过程，包括了动态创建、调度和消亡的整个过程，进程是程序资源分配管理的最小单位。有独立的地址空间。</p><p>线程是操作操作系统能够进行运算调度的最小单位。线程被包含在进程之中，是进程中的实际运作单位，一个进程内可以包含多个线程，多个线程共享进程的堆和方法区资源，不共享栈、程序计数器。</p><p>协程是用户态的轻量级线程，不受操作系统的调度，而是由程序员或者库来控制。协程可以在一个线程中切换执行多个任务，实现了异步编程的效果。协程的创建和销毁完全由用户空间完成，开销非常小。</p><h2 id="_5-进程间的通信方式有哪些" tabindex="-1"><a class="header-anchor" href="#_5-进程间的通信方式有哪些"><span>5. 进程间的通信方式有哪些？</span></a></h2><p>进程间的通信方式有以下几种：</p><ol><li>管道（Pipe）：管道是一种单向通信方式，可以在进程间传输数据。管道只能用于父子进程之间或者兄弟进程之间的通信。</li><li>命名管道（Named Pipe）：命名管道是一种单向通信方式，可以在进程间传输数据。与管道不同的是，命名管道可以用于任意进程之间的通信。</li><li>共享内存（Shared Memory）</li><li>信号（Signal）：信号是一种异步通信方式，进程可以通过发送信号来通知其他进程或者处理特定事件。</li><li>消息队列（Message Queue）</li><li>套接字（Socket）：套接字是一种通过网络进行进程间通信的方式，可以本机通信也可以跨机器通信。</li></ol><h2 id="_6-进程间的同步方式有哪些" tabindex="-1"><a class="header-anchor" href="#_6-进程间的同步方式有哪些"><span>6. 进程间的同步方式有哪些？</span></a></h2><p>我们把异步环境下的一组并发进程因直接制约而互相发送消息、进行互相合作、互相等待，使得各进程按一定的速度执行的过程称为进程间的同步。</p><p>进程间的同步方式有以下几种：</p><ol><li>临界区（Critical Section）</li><li>互斥量（Mutex）</li><li>信号量（Semaphore）</li><li>事件（Event）</li></ol><h2 id="_7-线程间的同步方式有哪些" tabindex="-1"><a class="header-anchor" href="#_7-线程间的同步方式有哪些"><span>7. 线程间的同步方式有哪些？</span></a></h2><p>在线程间实现同步是为了确保多个线程按照特定的顺序执行，以避免竞态条件（race condition）和其他并发问题。以下是常见的线程间同步方式：</p><ol><li>互斥锁（Mutex）： 互斥锁是最常用的同步机制之一。一个互斥锁只能同时被一个线程获取，其他线程必须等待该线程释放锁后才能继续执行。互斥锁用于保护临界区（Critical Section），确保只有一个线程可以访问共享资源。</li><li>信号量（Semaphore）： 信号量是一个计数器，用于控制对共享资源的访问。它可以允许多个线程同时访问资源，但是要限制同时访问的线程数量。信号量可以用来实现资源池的管理等场景。</li><li>条件变量（Condition Variable）： 条件变量用于在线程间实现条件等待和通知。一个线程可以等待某个条件成立，当条件满足时，另一个线程可以通知等待的线程继续执行。条件变量通常和互斥锁一起使用，以确保在等待条件时不会出现竞态条件。</li><li>读写锁（Read-Write Lock）： 读写锁允许多个线程同时读取共享资源，但在有线程在写入时，其他线程不能进行读或写操作。这样可以提高读操作的并发性能，适用于读多写少的场景。</li><li>屏障（Barrier）： 屏障用于将多个线程分为多个阶段执行，在每个阶段的某个点上，所有线程必须等待，直到所有线程都到达屏障点，然后继续执行下一个阶段。</li><li>原子操作： 原子操作是一种不可被中断的操作，要么完全执行成功，要么完全不执行，不存在中间状态。原子操作可以用于简单的同步需求，如增加或减少共享变量的值，确保在多线程环境下数据的一致性。</li></ol><h2 id="_8-进程的状态都有哪些" tabindex="-1"><a class="header-anchor" href="#_8-进程的状态都有哪些"><span>8. 进程的状态都有哪些？</span></a></h2><ol><li><strong>新建</strong>状态（New）：进程刚被创建，但尚未被调度执行。</li><li><strong>就绪</strong>状态（Ready）：进程已经准备好运行，但尚未被分配到CPU资源。</li><li><strong>运行</strong>状态（Running）：进程正在运行，占用CPU资源。</li><li><strong>阻塞</strong>状态（Blocked）：进程因为某些原因（比如等待I/O操作完成）而暂时无法运行，在这个状态下，进程不会占用CPU资源。</li><li><strong>终止</strong>状态（Terminated）：进程已经完成了执行或者被操作系统强制终止。</li></ol><h2 id="_9-进程是如何调度的" tabindex="-1"><a class="header-anchor" href="#_9-进程是如何调度的"><span>9. 进程是如何调度的？</span></a></h2><p>进程调度可以分为抢占式和非抢占式。</p><p>a. **非抢占方式。**只允许进程主动放弃处理机。在运行过程中即便有更紧迫的任务到达，当前进程依然会继续使用处理机，直到该进程终止或主动要求进入阻塞态。</p><p>b. **抢占方式。**当一个进程正在处理机上执行时，如果有一个更重要或更紧迫的进程需要使用处理机，则立即暂停正在执行的进程，将处理机分配给更重要紧迫的那个进程。</p><p>非抢占式：</p><ul><li><strong>先来先服务</strong>:非抢占式的调度算法。每次从就绪队列选择最先进入队列的进程，然后一直运行，直到进程退出 或被阻塞，才会继续从队列中选择第一个进程接着运行。特点：公平，实现简单。但不利于短作业以及I/O密集型进程。</li><li><strong>短作业优先</strong>:非抢占式的调度算法。按照剩余执行时间最短的进程先执行。该算法可以减少平均等待时间。但是要预先知道进程的执行时间。特点：短作业优先算法的优点是能尽快处理完短作业，平均等待/周转时间等参数很优秀；但是容易长作业饥饿，实现困难。</li><li><strong>高响应比优先算法</strong>:非抢占式。响应比为等待时间/服务时间,响应比高的先执行，可以避免饥饿现象。特点：a,b方式的平衡实现。</li></ul><p>抢占式：</p><ul><li>**最短剩余时间优先(SRTN)：最短作业优先的抢占式版本。**当一个新的作业到达时，其整个运行时间与当前进程的剩余时间作比较。如果新的进程需要的时间更少，则挂起当前进程，运行新的进程。否则新的进程等待</li><li><strong>时间片轮转调度</strong>:抢占式。给每个进程都分配一个时间片，时间片执行完毕就会切换进程，执行下一个进程，依次循环。此算法容易频繁的切换进程，浪费系统资源。（公平，但频繁切换，有开销）</li><li><strong>多级反馈队列</strong>：抢占式。多级反馈队列调度算法是对其他算法的一个折中权衡。是「时间片轮转算法」和「最高优先级算法」的综合和发展。</li></ul><p>一个特殊的方法：<strong>优先级调度</strong>:有抢占式也有非抢占式：按照设定优先级执行。抢占式是动态调整优先级，如按照运行时间调整优先级。非抢占式是创建进程就设定了。（适用实时系统，对低优先级进程不利）</p><h2 id="_10-操作系统的进程空间有哪些" tabindex="-1"><a class="header-anchor" href="#_10-操作系统的进程空间有哪些"><span>10. 操作系统的进程空间有哪些？</span></a></h2><p>栈区（stack），由编译器自动分配释放，存放函数的参数值，局部变量的值等。</p><p>堆区（heap），一般般由程序员分配释放，若程序员不释放，程序结束时可能由OS回收 。</p><p>静态区（static），存放全局变量和静态变量的存储。</p><p>代码区(text)，存放函数体的二进制代码。</p><p><strong>线程共享堆区、静态区。</strong></p><h2 id="_11-什么是死锁-应该如何解决死锁" tabindex="-1"><a class="header-anchor" href="#_11-什么是死锁-应该如何解决死锁"><span>11. 什么是死锁？应该如何解决死锁？</span></a></h2><p>死锁是指在多个进程（或线程）之间，每个进程都占有某些资源，同时又等待其他进程释放它所需要的资源，从而导致所有进程都无法继续执行下去的一种状态。</p><p>死锁产生的原因通常有以下几种情况：竞争资源、不恰当的资源分配顺序、循环依赖</p><p>为了解决死锁问题，可以采取以下策略：</p><ol><li>预防死锁：通过合理的资源分配策略、避免循环依赖等方式，尽可能地预防死锁的发生。</li><li>避免死锁：通过安全序列等方式，避免产生死锁。</li><li>检测死锁：可以通过资源分配图等方式检测死锁是否已经发生。</li><li>解除死锁：当发现死锁已经发生时，可以采取一些措施解除死锁，比如中断某个进程、回收某个进程占用的资源等。</li></ol><h2 id="_12-操作系统是如何管理内存的" tabindex="-1"><a class="header-anchor" href="#_12-操作系统是如何管理内存的"><span>12. 操作系统是如何管理内存的？</span></a></h2><p>**存管理方式：**页式管理、段式管理、段页式管理</p><p><strong>分段管理：</strong></p><p>原理：将程序的地址空间划分为若干段（segment），如代码段，数据段，堆栈段；这样每个进程有一个二维地址空间，相互独立，互不干扰。</p><p>特点：没有内碎片（因为段大小可变，改变段大小来消除内碎片）。但段换入换出时，会产生外碎片（比如4k的段换5k的段，会产生1k的外碎片）。</p><p><strong>分页管理：</strong></p><p>原理：在页式存储管理中，将程序的逻辑地址划分为固定大小的页（page），而物理内存划分为同样大小的页框，程序加载时，可以将任意一页放入内存中任意一个页框，这些页框不必连续，从而实现了离散分离。</p><p>优点：没有外碎片（因为页的大小固定），但会产生内碎片（一个页可能填充不满）。</p><p><strong>段页式管理：</strong></p><p>段⻚式管理机制结合了段式管理和⻚式管理的优点。简单来说段⻚式管理机制就是把主存先分成若⼲段，每个段⼜分成若⼲⻚，也就是说段⻚式管理机制中段与段之间以及段的内部的都是离散的。</p><h2 id="_13-常见的页面置换算法有哪些" tabindex="-1"><a class="header-anchor" href="#_13-常见的页面置换算法有哪些"><span>13. 常见的页面置换算法有哪些？</span></a></h2><p>**置换算法：**先进先出FIFO、最近最久未使用LRU、最佳置换算法OPT。</p><p><strong>先进先出FIFO:</strong></p><p>缺点：没有考虑到实际的页面使用频率，性能差、与通常页面使用的规则不符合，实际应用较少。</p><p><strong>最近最久未使用LRU:</strong></p><p>原理：选择最近且最久未使用的页面进行淘汰。</p><p>优点：考虑到了程序访问的时间局部性，有较好的性能，实际应用也比较多。</p><p>缺点：没有合适的算法，只有适合的算法，lFU、random都可以。</p><p><strong>最佳置换算法OPT:</strong></p><p>原理：每次选择当前物理块中的页面在未来长时间不被访问的或未来不再使用的页面进行淘汰。</p><p>优点：具有较好的性能，可以保证获得最低的缺页率。</p><p>缺点：过于理想化，但是实际上无法实现（没办法预知未来的页面）。</p><h2 id="_14-什么是虚拟内存" tabindex="-1"><a class="header-anchor" href="#_14-什么是虚拟内存"><span>14. 什么是虚拟内存？</span></a></h2><p>两个进程不能同时操作同一个物理内存，会导致崩溃。操作系统为每个进程分配独立的一套“虚拟地址”，大家自己用自己的虚拟地址，互不干涉，所有进程都不能访问物理地址。操作系统负责将虚拟地址映射到对应的物理地址上。</p><h2 id="_15-什么是io的多路复用" tabindex="-1"><a class="header-anchor" href="#_15-什么是io的多路复用"><span>15. 什么是IO的多路复用？</span></a></h2><p>一个进程虽然任一时刻只能处理一个请求，但是处理每个请求的事件时，耗时控制在 1 毫秒以内，这样 1 秒内就可以处理上千个请求，把时间拉长来看，多个请求复用了一个进程，这就是多路复用，这种思想很类似一个 CPU 并发多个进程，所以也叫做时分多路复用。</p><p><strong>SELECT/POLL/EPOLL</strong> 内核提供给用户态的多路复用系统调用，进程可以通过一个系统调用函数从内核中获取多个事件。</p><p>SELECT：</p><p>将已连接的 Socket 都放到一个<strong>文件描述符集合</strong>，然后调用 SELECT 函数将文件描述符集合拷贝到内核里。</p><p>POLL:</p><p>不再用 BitsMap 来存储所关注的文件描述符，取而代之用动态数组，以链表形式来组织，突破了 SELECT 的文件描述符个数限制，当然还会受到系统文件描述符限制。</p><p>都是使用线性结构存储进程关注的 Socket 集合，因此都需要遍历文件描述符集合来找到可读或可写的 Socket，时间复杂度为 O(n)，而且也需要在用户态与内核态之间拷贝文件描述符集合，效率比较低。</p><p>EPOLL：</p><p>第一，在内核里使用红黑树来跟踪进程所有待检测的文件描述字，把需要监控的 socket 通过 epoll_ctl() 函数加入内核中的红黑树里，红黑树是个高效的数据结构，增删改一般时间复杂度是 O(logn)。</p><p>第二，使用事件驱动的机制，内核里维护了一个链表来记录就绪事件，当某个 socket 有事件发生时，通过回调函数内核会将其加入到这个就绪事件列表中，不需要轮询整个Socket集合，从而提高效率。</p><h2 id="_16-什么是零拷贝" tabindex="-1"><a class="header-anchor" href="#_16-什么是零拷贝"><span>16. 什么是零拷贝？</span></a></h2><p>使用DMA和SG-DMA技术，让内核态直接将文件从磁盘读到缓冲区然后转给网卡，减少上下文切换和数据拷贝的次数。零拷贝技术的文件传输方式相比传统文件传输的方式，减少了 2 次上下文切换和数据拷贝次数，只需要 2 次上下文切换和数据拷贝次数，就可以完成文件的传输，而且 2 次的数据拷贝过程，都不需要通过 CPU，2 次都是由 DMA 来搬运。</p>',84)],n={},a=(0,t(9874).A)(n,[["render",function(e,l){return(0,p.uX)(),(0,p.CE)("div",null,i)}]]),s=JSON.parse('{"path":"/posts/class_notes/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F.html","title":"","lang":"zh-CN","frontmatter":{"description":"1. 什么是并发，什么是并行？ 并发是指多个任务在同一个时间段内交替进行，通过不断地切换上下文来实现同时执行的效果。 并行是指多个任务在同一个时间段内实际同时执行，并利用多个处理器或多核CPU的并行计算能力来加速任务的完成。 2. 中断和轮询有什么区别？ 中断和轮询是计算机系统中常用的两种处理方式，它们在处理外部事件和设备响应方面有所不同。中断是一种事...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/class_notes/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F.html"}],["meta",{"property":"og:site_name","content":"ik楠の空间"}],["meta",{"property":"og:description","content":"1. 什么是并发，什么是并行？ 并发是指多个任务在同一个时间段内交替进行，通过不断地切换上下文来实现同时执行的效果。 并行是指多个任务在同一个时间段内实际同时执行，并利用多个处理器或多核CPU的并行计算能力来加速任务的完成。 2. 中断和轮询有什么区别？ 中断和轮询是计算机系统中常用的两种处理方式，它们在处理外部事件和设备响应方面有所不同。中断是一种事..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-06T07:30:09.000Z"}],["meta",{"property":"article:author","content":"iknan"}],["meta",{"property":"article:modified_time","content":"2024-06-06T07:30:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-06T07:30:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"iknan\\",\\"url\\":\\"https://iknan.love\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是并发，什么是并行？","slug":"_1-什么是并发-什么是并行","link":"#_1-什么是并发-什么是并行","children":[]},{"level":2,"title":"2. 中断和轮询有什么区别？","slug":"_2-中断和轮询有什么区别","link":"#_2-中断和轮询有什么区别","children":[]},{"level":2,"title":"3. 用户态和内核态是什么？","slug":"_3-用户态和内核态是什么","link":"#_3-用户态和内核态是什么","children":[]},{"level":2,"title":"4. 进程，线程和协程有什么关系和区别？","slug":"_4-进程-线程和协程有什么关系和区别","link":"#_4-进程-线程和协程有什么关系和区别","children":[]},{"level":2,"title":"5. 进程间的通信方式有哪些？","slug":"_5-进程间的通信方式有哪些","link":"#_5-进程间的通信方式有哪些","children":[]},{"level":2,"title":"6. 进程间的同步方式有哪些？","slug":"_6-进程间的同步方式有哪些","link":"#_6-进程间的同步方式有哪些","children":[]},{"level":2,"title":"7. 线程间的同步方式有哪些？","slug":"_7-线程间的同步方式有哪些","link":"#_7-线程间的同步方式有哪些","children":[]},{"level":2,"title":"8. 进程的状态都有哪些？","slug":"_8-进程的状态都有哪些","link":"#_8-进程的状态都有哪些","children":[]},{"level":2,"title":"9. 进程是如何调度的？","slug":"_9-进程是如何调度的","link":"#_9-进程是如何调度的","children":[]},{"level":2,"title":"10. 操作系统的进程空间有哪些？","slug":"_10-操作系统的进程空间有哪些","link":"#_10-操作系统的进程空间有哪些","children":[]},{"level":2,"title":"11. 什么是死锁？应该如何解决死锁？","slug":"_11-什么是死锁-应该如何解决死锁","link":"#_11-什么是死锁-应该如何解决死锁","children":[]},{"level":2,"title":"12. 操作系统是如何管理内存的？","slug":"_12-操作系统是如何管理内存的","link":"#_12-操作系统是如何管理内存的","children":[]},{"level":2,"title":"13. 常见的页面置换算法有哪些？","slug":"_13-常见的页面置换算法有哪些","link":"#_13-常见的页面置换算法有哪些","children":[]},{"level":2,"title":"14. 什么是虚拟内存？","slug":"_14-什么是虚拟内存","link":"#_14-什么是虚拟内存","children":[]},{"level":2,"title":"15. 什么是IO的多路复用？","slug":"_15-什么是io的多路复用","link":"#_15-什么是io的多路复用","children":[]},{"level":2,"title":"16. 什么是零拷贝？","slug":"_16-什么是零拷贝","link":"#_16-什么是零拷贝","children":[]}],"git":{"createdTime":1717659009000,"updatedTime":1717659009000,"contributors":[{"name":"iknan","email":"149158995+iknan@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":13.93,"words":4178},"filePathRelative":"posts/class_notes/操作系统/操作系统.md","localizedDate":"2024年6月6日","excerpt":"<h2>1. 什么是并发，什么是并行？</h2>\\n<p>并发是指多个任务在同一个时间段内交替进行，通过不断地切换上下文来实现同时执行的效果。</p>\\n<p>并行是指多个任务在同一个时间段内实际同时执行，并利用多个处理器或多核CPU的并行计算能力来加速任务的完成。</p>\\n<h2>2. 中断和轮询有什么区别？</h2>\\n<p>中断和轮询是计算机系统中常用的两种处理方式，它们在处理外部事件和设备响应方面有所不同。中断是一种事件驱动的处理方式，当事件发生时会打断当前程序的执行，立即进行处理。而轮询是一种主动查询的方式，处理器会周期性地检查事件的状态并进行处理。中断适用于需要及时响应的事件，而轮询适用于相对不紧急的事件。</p>","autoDesc":true}')}}]);