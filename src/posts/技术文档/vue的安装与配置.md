---
icon: vscode-icons:file-type-vueconfig
date: 2022-01-02
category:
  - vue
  - 前端
  - 技术文档
tag:
  - vue
  - 前端
  - 技术文档
star: true 
dir:
  order: 9
---
# vue的安装与配置

## 1.node.js安装
<!-- more -->
### 1.网站：[下载 | Node.js 中文网 (nodejs.cn)](https://nodejs.cn/download/)

### 2.直接下载安装，一直下一步即可（修改安装地址时路径不要有中文）

### 3.测试是否安装成功,打开cmd窗口

输入node -v  //显示node.js版本

输入npm -v  //显示npm版本

### 4.在安装路径下创建两个文件夹node_cache和node_global

### 5.使用管理员身份打开cmd窗口，输入以下代码

​ (1)npm config set prefix "路径\node_globle"(替换即可)

``` nmp
npm config set prefix "D:\web\node.js\node_global"
```

(2)npm config set cache "路径\node_globle"(替换即可)

```npm
npm config set cache "D:\web\node.js\node_cache"
```

检查

```npm
npm config get cache
npm config get prefix
```

### 6.配置环境变量

(1) 在系统变量中新建![image-20240507152950202]

如果node_global中没有node_modules,需要创建node_modules文件夹

然后在Path中添加 `%NODE_PATH%`

(2)在用户变量中双击Path

把这个修改成刚刚创建的node_global文件夹

### 7.安装淘宝镜像中央仓库

npm是国外服务器，中国用户下载内容速度受限。推荐使用中国镜像cnpm，其内容与npm同步，是淘宝设立的服务器。

命令行指令：

npm config set registry <https://registry.npmmirror.com>

验证淘宝镜像命令：npm config get registry

## 2.webpack的安装

### (1)窗口命令

```bash
npm install -g webpack     //下载
npm install --save-dev webpack  //安装到devDependencies,运行
```

查看webpack版本

`npm list webpack`

注意：如果安装的是webpack v4+版本(即比v4高的版本)，则还需要安装webpack-cli或者webpack-command，否则webpack命令运行不了。执行：

```bash
npm uninstall webpack-cli    //卸载本地安装的webpack-cli
npm install -g webpack-cli       //全局安装webpack-cli
npm install --save-dev webpack-cli   //把webpack-cli安装到devDependencies
```

## 3.安装vue.cli

安装vue Cli

```bash
npm install -g vue-cli
```

​
