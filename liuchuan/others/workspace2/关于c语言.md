# 关于C语言

2019年07月19日

ps:这里出现点儿问题，我想使用H5`<center>`标签使上面时间居中显示，但是不好用，导致了随后的输入都变成了居中。我更想实现靠右的效果的。妥协了。

## 代码示例

    #include <stdio.h>

    int main()
    {
        printf("helll world!\n");
        return 0;
    }

代码块写入文件，命名为aa.c  
`gcc`该文件，编译后得到.out文件，运行，能够输出“hello world”。

## 第二个示例

00写了hello.c文件，定义了 max() 和 main() 两个函数。在实现同一框中两个文件的时候，错误了使用了 `vi hello.c` 命令，导致创建了 "vi hello.c" 文件，然后使用了命令 `rm vi hello.c` ”成功“地将 "hello.c" 文件删除了，留下了 ”vi hello.c“ 空白文件。好吧！
00命名文件名的时候，不要使用空格。

## 代码示例3

编译一个.c文件，使用命令 `gcc -c max.c -o max.o` -o表示重命名。

## 代码成果

1. hello.c  

        #include <stdio.h>
        //#include "max.c"      
            
        int main()
        {
            int a1=33;
            int a2=21;
            int maxNum=max(a1,a2);
            int minNum=min(a1,a2);
            printf("较大的是 %d\n",maxNum);
            printf("较小的是 %d\n",minNum);
            return 0;
        }

2. max.c

        int max (int a, int b)
        {
            if(a>b){
                return a;
            }else{
                return b;
            }
        }

00然后用`gcc hello.c max.c -o meizi.out` 编译成一个 .out 文件就可以执行。直接使用当前目录 `./meizi.out` 就可以看到想要的输出了。另外加上min.c文件也同理。

## 使用`make`命令

1. 编写一个文件，命名为 Makefile （尝试命名为了 MakeFile ，失败！）。
2. 编写内容，结构如下：

        # this is make file
        hello.out:max.o min.o min.o hello.c
                gcc max.o min.o hello.c
        max.o:max.c
                gcc -c max.c
        min.o:min.c
                gcc -c min.c

    “：”用来隔开目标文件和编译的源文件  
    第3、 5 、7 行为实际执行的命令，也是使用gcc命令。第三行应该加上 -o进行重命名。
3. 直接使用`make`命令就能自动进行编译了。输出一个 .out文件。即可执行，得到想要的输出。

2019年07月20日14:19:10
