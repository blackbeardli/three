##### git的基础命令

* 安装完 Git 应该做的第一件事就是设置用户名称与邮件地址。这样做很重要，因为每一个 Git 的提交都会使用这些信息，并且它会写入到每一次提交中，不可更改：

```
$ git config --global user.name "名字"  //设置用户名
$ git config --global user.email "邮箱"   //设置用户邮箱
$ git config --list    //查看用户信息
```

* 初始化一个本地库，并连接远程库

```
$ git init     //初始化一个空的git仓库
$ git remote add origin 远程库的地址    //连接远程库
$ git pull origin master     //拉取代码到本地仓库
$ git fetch --al
$ git branch    //查看当前分支
$ git branch -a   //查看本地都有哪些分支
$ git branch 分支名    //创建新分支
$ git checkout 分支名     //切换到新分支
* $ git branch 分支名  $ git checkout 分支名* 等价于 * $ git checkout -b 分支名 *
$ git status  //查看状态
$ git add .    //表示添加新文件和编辑过的文件不包括删除的文件
$ git commit -m '版本信息'  //提交的版本信息描述
$ git push origin master  //推送到远程仓库
$ git log   //查看当前分支的所有提交记录
```

* 克隆远程库

```
$ git clone 远程库的地址
剩下的操作，与连接远程库后的操作一样。
```

* 初始化本地库与克隆远程库的区别
  * **本地仓库**和**远程仓库**在本质上没有太大区别,只不过一个是本地电脑,一个是远程电脑.
  * 本地仓库和远程仓库的基本行为应该是一致的，约定俗成的规定是远程仓库一般不直接参与日常开发工作，主要作为项目托管中心。

```
     git init：初始化本地项目
将本地项目初始化git项目，直观表现是在该项目同级下多了.git隐藏目录，其存储着git版本库相关信息。此后当前项目便具备了本地管理的能力，可以与git进行交互。

    git clone:克隆远程项目
同 git init 一样的作用,也是创建本地仓库,只不过 git init 是直接将本地项目作为本地仓库,而git clone 是将远程项目克隆到本地并作为本地仓库.

由此可见,git clone 比 git init 多了一层远程仓库的概念.


```



