# 2019年8月16日

## 关于git

大约有两天还多的时间，鼓捣了一个git的ppt，分享给大家。个人感觉由浅入深，从基础语法到冲突解决，照顾到初学和进阶两个阶段的人群。

    git init
    git config --global user.name XXX 
    git config --global user.email XXX 
    git config --list
    git add 
    git commit –m “XXXX” 
    git status
    git push origin 本地分支名:远程分支名
    git pull
    git fetch 

基础命令如上。

模拟冲突在本地出现：本地两个分支都对同一个文件作出更改，在合并分支时出现冲突，需要解决冲突后提交。

    git checkout dev
    git vim bb.txt
        修改一些内容并保存
    git checkout devliu
    git vim bb.txt
        在devliu的分支上修改一些内容并保存
    git checkout dev
    git merge devliu

个人觉得版本回退很重要，git本身就是干这个事情的。

    git reset --hard 版本号
    git reset --hard HEAD^

版本号从哪里查看呢。

    git reflog 可以查看所有分支的所有操作记录
    git log   

大致，如上。

## 关于小算法

a=5,b=4  
不适用加减运算，怎么搞定输出a+b的值？  
考虑到计算机内部使用2进制，先将a、b转成2进制数。  
用异或算法和与运算，得出最后的结果。

2019年8月16日20:15:05
