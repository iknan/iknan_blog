---
icon: iconoir:network-reverse
date: 2024-05-02
category:
  - 后端
  - Linux
tag:
  - Linux
  - 面试题
  - 笔记
dir:
  order: 10
---

# Linux基础命令提纲
<!-- more -->
## 第一章 初始 Linux

1. **自由软件的含义**
2. **常见的 Linux 发行版本**
3. **常见的 Linux 操作系统使用习惯**
   - 开关机管理
   - 文件管理
   - 权限管理
   - 密码管理

## 第二章 常用命令

1. **文件显示命令**
   - `cat` 命令：显示文件内容
   - `more` 命令：分页显示文件内容
2. **文件内容查询 `grep` 命令**
   - `grep abc /etc/passwd` 普通查找
   - `grep abc /etc/passwd /etc/shadow` 在多个文件中查找
   - `grep -l abc file1 file2 file3` 列出包含指定字符串的文件的文件名
   - `grep -n abc file` 查找指定字符串并显示匹配行的行号
   - `grep -n abc file1 file2` 在多个文件中查找并显示匹配行的行号
   - `grep -v “#” file1` 显示不匹配的行
   - `grep ^root /etc/passwd` 显示匹配指定行首的行
   - `grep abc$ file` 列出文件中所有以 abc 结尾的行
3. **文件和目录基本操作**
   - `Tab` 自动补全命令
   - `man` 命令查看帮助信息
4. **文件复制、移动、删除**
   - `cp` 命令
     - `cp file /dir` 直接复制
     - `cp file /dir/newfilename` 复制并改名
     - `cp file1 file2 /dir` 复制多个文件
     - `cp -r /dir1 /dir2` 复制目录
   - `mv` 命令
     - `mv file1 file2` 重命名
     - `mv file1 /dir` 移动文件
   - `mkdir` 命令
     - `mkdir dirName` 当前目录下创建新目录
     - `mkdir /tmp/dirName` 指定绝对路径创建新目录
     - `mkdir -p dir1/dir2/dir3` 创建多级目录
   - `rmdir` 命令：只能删除空目录
   - `rm` 命令
     - `rm file` 删除文件
     - `rm -f file` 强制删除文件
     - `rm -r dir` 删除目录及其子目录
     - `rm -rf dir` 强制删除目录及其子目录
5. **链接**
   - 硬链接与软连接（符号链接）
     - 硬链接相当于源文件可以同步更新的备份，软连接相当于快捷方式
     - 硬链接不能跨文件系统，不能链接目录
     - 删除源文件，硬链接不会有影响，软链接变无效
   - 创建：硬链接 `ln source linkfile` 软链接 `ln -s source linkfile`
6. **文件查找命令**
   - `find`：格式注意先写查找范围，再写查找类型，最后是查找文件对象（可使用通配符）
   - `locate` 命令：注意和 `updatedb` 命令配合使用
7. **文件访问权限**
   - `ls -l` (`ll`) 命令显示结果字符串，`ls –a` 显示全部文件
   - `chmod` 命令
     - 数字法：`chmod 755 file`
     - 加减法：`chmod u+w,g+x,o+x file` `chmod a+x file` `chmod +w file`
     - 等号法：`chmod u=rw,g=rw,o=r file`
     - 设置目录权限：`chmod -R 777 dir`
   - `chown` 命令：改变文件所有者 `chown user file`
   - `chgrp` 命令：改变文件所属组 `chgrp newgrp file`

## 第三章 文件管理

1. **文件基础知识**
   - 文件类型及区分：
     - 文件类型 `ls -l` 或 `ll` 命令输出的第一个字符
       | 文件类型       | 标识符 |
       | -------------- | ------ |
       | 普通文件       | -      |
       | 目录文件       | d      |
       | 字符设备文件   | c      |
       | 块设备文件     | b      |
       | 链接文件       | l      |
       | 管道文件       | p      |
       | 套接字文件     | s      |
   - 常用系统目录：
     - `/`: 根目录
     - `/boot`: 启动相关文件
     - `/mnt`: 挂载目录
     - `/root`: root 用户家目录
     - `/home`: 普通用户家目录，如 `/home/user1`
     - `/dev`: 设备文件目录
     - `/etc`: 配置文件目录

## 第四章 用户与用户组

1. **root 用户的家目录和普通用户的家目录**
2. **配置文件**
   - `/etc/passwd`
   - `/etc/shadow`
   - `/etc/group`
   - `/etc/gpasswd`
3. **`useradd` 命令**：新增用户 `useradd newusername`
4. **`passwd` 命令**
   - 设置自己的密码：`passwd`
   - 设置其他用户密码（root 可执行）：`passwd user1`
   - 直接设置其他用户密码（root 可执行）： `echo “newpassword” | passwd –stdin user`
   - 锁定/解锁用户（root 可用）：`passwd -l user` `passwd -u user`
5. **`userdel` 命令**：删除用户 `userdel user`
6. **`groupadd` 命令**：增加组
7. **`groupmod` 命令**：修改组信息
   - `-g`：修改 GID
   - `-n`：修改组名
8. **`gpasswd` 命令**：指定组属性
   - `gpasswd group`：设定组密码
   - `gpasswd -A group`：指定组管理员（root 专用）
   - `gpasswd -M user1,user2 group` ：添加组成员
   - `gpasswd -a user1,user2 group`：添加组成员（组管理员用）
   - `gpasswd -d user group`：删除组成员（组管理员用）

## 第五章 Linux 磁盘管理

1. **常用命令**
   - `mount`：挂载命令
     - `mount /dev/sr0 /mnt/cdrom`：挂载设备到挂载点
     - `umount /mnt/cdrom`：卸载挂载点
     - `mount -o remount,noexec /dev/sdb2`：`-o` 后接特殊选项，此例为重新挂载并指定不允许在该分区执行可执行文件
     - `mount -o remount,usrquota,grpquota /dev/sdb2`：重新挂载分区并写入用户磁盘配额文件和组磁盘配额文件
2. **磁盘相关**
   - 设备文件名 `/dev/sda` `/dev/sdb`
   - 分区原则
     - 主分区最多 4 个
     - 扩展分区最多 1 个
     - 主分区和扩展分区加起来最多 4 个
     - 主分区和扩展分区分区号（1-4）
     - 扩展分区不能直接写入数据，需要分成逻辑分区
     - 逻辑分区的分区号从 5 开始，系统内第二块硬盘的第一个逻辑分区设备名为 `/dev/sdb5`

## 第六章 进程管理

1. **进程基础**
   - `ps aux` 或 `ps -elf` 获取快照
   - `top` 命令动态获取系统信息（前 5 行）
   - `uptime` 命令可以获取当前启动时间和负载信息
2. **`at` 和 `batch`**
   - 配置文件：`/etc/at.allow` `/etc/at.deny`
   - `at` 时间：`at now +5 minutes`，`at now +3 days`，`at 23:00 2021-11-20`，`at midnight 2021-11-11`
   - `atq` 命令：查询当前 `at` 任务
   - `atrm jobno`：删除 `at` 任务
   - `batch` 命令不需要指定具体时间，其他与 `at` 一

致
3. **`crontab` 服务**
    - 配置文件：`/etc/cron.allow` `/etc/cron.deny`，配置文件不存在则表示允许所有用户使用
    - 配置格式：时间 * 5，指定执行任务的时间
     - 第 1 位：分 (0-59)
     - 第 2 位：时 (0-23)
     - 第 3 位：日期 (1-31)
     - 第 4 位：月份 (1-12)
     - 第 5 位：星期 (0-7，0 和 7 都表示星期天)
     - `crontab -e` 命令：编辑当前用户的计划任务
     ![crontab](/linux/crontab.png)
    - 示例：
     - 每天凌晨 4 点执行：`0 4 * * *`
     - 每周日 0 点执行：`0 0 * * 0`
     - 每小时第 30 分钟执行：`30 * * * *`
     - 每天凌晨 0 点执行：`0 0 * * *`
4. **`kill` 命令**
    - `kill pid`：结束指定进程
    - `kill -9 pid`：强制结束指定进程
    - `pkill processname`：结束指定进程名称的所有进程
    - `killall processname`：结束所有指定进程名称的进程
5. **启动/重启/停止服务**
    - `service network start/restart/stop` 或者服务程序绝对地址 + `start/restart/stop`

## 第七章 软件包管理 RPM 和 YUM

1. **RPM 包管理**
   - 安装：`rpm -ivh package`（注意使用包全名）
   - 查询：`rpm -q soft`（注意使用软件名）
   - 卸载：`rpm -e package`

2. **YUM 包管理**
   - `yum` 命令需要在联网的环境下或者设置本地 `yum` 源。
   - 在联网的环境下可以自动解决依赖性的问题。
   - 安装软件：`yum install 软件名`（如 `yum install mysqld`）
   - 卸载软件：`yum remove 软件名`

## 第八章 Linux 编程

1. **vi 相关操作**
   - 执行 `vi` 命令：
     - `vi filename` ：打开或新建文件，并将光标置于第一行首
     - `vi +n filename` ：打开文件，并将光标置于第 n 行首
     - `vi + filename` ：打开文件，并将光标置于最后一行首
     - `vi +/pattern filename`：打开文件，并将光标置于第一个与 `pattern` 匹配的串处
     - `vi -r filename` ：在上次正用 `vi` 编辑时发生系统崩溃，恢复 `filename`
     - `vi filename....filename` ：打开多个文件，依次进行编辑

2. **三种模式**
   - 运行 `vi` 命令进入命令模式，按 `a i o r`（或 `A I O R`）进入输入模式（插入模式），按 `ESC` 回到命令模式，输入 `:` 进入底行命令模式（底行模式、末行模式），按 `ESC` 重回命令模式。

3. **命令模式下的常用命令**
   - 定位：
     - `H` 移至屏幕顶端
     - `M` 移至屏幕中间
     - `L` 移至屏幕下端
     - `n+空格` 向右移动 n 个字符
     - `G` 移动到最后一行
     - `nG` 移动至第 n 行
     - `gg` 移动至第 1 行
   - 删除：
     - `x` 向后删除一个字符
     - `X` 向前删除一个字符
     - `nx` 连续删除 n 个字符
     - `dd` 删除当前行
     - `ndd` 向后删除 n 行
     - `d1G` 删除第 1 行至当前行
     - `dG` 删除当前行到最后一行
   - 复制：
     - `yy` 复制当前行
     - `nyy` 向后复制 n 行
     - `y1G` 复制第 1 行至当前行
     - `yG` 复制当前行至最后一行
     - `p` 粘贴在下一行
     - `P` 粘贴在上一行
   - 其他：
     - `u` 撤销
     - `.` 重复
     - `ZZ` 保存文件并退出

4. **底行模式下的常用命令**
   - 保存：
     - `:w` 
     - `:w!` 
     - `:wq` 
     - `:q!` 
     - `:wq!` 
     - `:w file n1,n2 w newfile`
   - 行号：
     - `:se nu` 
     - `:se nonu` 
     - `:set nu` 
     - `: set nonu`
   - 查找:
     - `:/str` 向下搜索 `str`
     - `:?str` 向上搜索 `str`
     - `n` 往前重复上次搜索
     - `N` 往后重复上次搜索
   - 替换： 
     - `:s/old/new` 本行替换一次
     - `:s/old/new/g` 本行全部替换
     - `:n1,n2s/old/new/g` 从第 n1 行到第 n2 行全部 `old` 替换为 `new`

## 第九章 Shell 编程

1. **Shell 基础**
   - `echo` 命令：
     - `-e` ：解释 `\n`、`\t` 等转义字符
     - `-n`：显示内容不换行
   - 重定向
     - `>`：以覆盖方式将输出重定向至文件
     - `>>`：以追加方式将输出重定向至文件
   - 管道符：`|` 将前一个命令的输出作为下一个命令的输入

2. **变量定义**
   - 注意事项：
     - `=` 两边不能有空格
     - 默认为字符串类型
     - 如果有两个单词以上可以使用 `""` 或 `''` 引起来，`""` 里边特殊字符有固定含义，如 `$ ! . \\ *` 等，`''` 里面均为普通字符。`` 反引号可以引用系统命令。
   - `echo` 输出变量值
   - `unset` 删除变量
   - 环境变量：
     - `export` 关键字，建议变量名字全部大写字母
     - `env` 查看环境变量
     - `unset` 删除环境变量
   - 预定义变量、位置参数变量
     - `$0`：脚本名
     - `$1` 至 `$9`：位置参数
     - `$#`：参数个数
     - `$@`：所有参数
     - `$*`：所有参数（作为单个字符串）
     - `$?`：上个命令的退出状态

3. **数值计算**
   - 双小括号 `$(( ))`：语法最松散，`*` 等符号无需转义，运算符两侧空格可有可无，小括号头尾空格可有可无，变量引用时 `$` 符号可有可无，如 `a=11;b=22;c=$(( a + b ))`，与 `$[]` 功能相同。
   - `let`：功能等同于双小括号，变量前可以不加 `$`，`=` 和其他运算符之间不能有空格。如 `let c=a+b`， `let c=$a+2`
   - `expr` 命令：`*` 等特殊符号必须转义（`\\*`），运算符两边必须有空格，引用变量必须加 `$`

4. **实例**

### 判断一个数是否为整数

```bash
#!/bin/bash

# 输入的数
num=$1

# 使用正则表达式判断是否为整数
if [[ $num =~ ^-?[0-9]+$ ]]; then
    echo "$num 是整数"
else
    echo "$num 不是整数"
fi
```

### 判断参数的个数

```bash
#!/bin/bash

# 参数个数
param_count=$#

echo "输入的参数个数为: $param_count"
```

### 比较两个参数的大小

```bash
#!/bin/bash

# 两个参数
a=$1
b=$2

if [ $# -ne 2 ]; then
    echo "请提供两个参数"
    exit 1
fi

if [ $a -eq $b ]; then
    echo "$a 等于 $b"
elif [ $a -gt $b ]; then
    echo "$a 大于 $b"
else
    echo "$a 小于 $b"
fi
```

### 计算 `1+2+3+…+n` 的和

```bash
#!/bin/bash

# 输入的 n
n=$1

if [[ ! $n =~ ^[0-9]+$ ]]; then
    echo "请输入一个正整数"
    exit 1
fi

sum=0

for ((i=1; i<=n; i++))
do
    sum=$((sum + i))
done

echo "1+2+...+$n 的和是: $sum"
```

### 计算 `n`（`n` 为输入的参数）的阶乘

```bash
#!/bin/bash

# 输入的 n
n=$1

if [[ ! $n =~ ^[0-9]+$ ]]; then
    echo "请输入一个正整数"
    exit 1
fi

factorial=1

for ((i=1; i<=n; i++))
do
    factorial=$((factorial * i))
done

echo "$n 的阶乘是: $factorial"
```
