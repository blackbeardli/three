#include <stdio.h>
int main(int argc, char const *argv[])
{
    printf("一共有 %d 个参数传入\n",argc);
    int i=0;
    for (i = 0;i++;i<argc)
    {
    printf("这是%d, 命令是 %s\n",i,argv[i]);
    }
    return 0;
}
