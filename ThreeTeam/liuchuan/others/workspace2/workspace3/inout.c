#include <stdio.h>
/*
在这里引入了关于标准输入输出流，默认有三个文件
stdin
stdout
stderr
 */




int main(int argc, char const *argv[])
{
    //printf("hello world \n");
    fprintf(stdout,"hello world \n");
    
    //scanf("%d",&a);
    int a;
    fscanf(stdin,"%d",&a);
    if (a>0)
    {
        printf("输入的值是多少呢？是  %d\n",a);
    }else
    {
        fprintf(stderr,"数字能小鱼 0 \n");
        return 1;
    };

    printf("输入的值是：%d\n",a);




    return 0;
}
