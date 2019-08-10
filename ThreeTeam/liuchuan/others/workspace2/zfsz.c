#include<stdio.h>
int main(int argc, char const *argv[])
{
    char str1[]="hello";
    char *str2="world";
    char str3[10];
    printf("输入几个字符： \n");
    scanf("%s",str3);//可以更改str为\
    str1、str3向不同的字符数组写入内容
    int i=0;
    int count=10;
    for ( i = 0; i < count; i++)
    {
        printf("%c\n",str1[i]);

    }
    printf("字符串  2  是 %s\n",str2);
    printf("字符串  3  是 %s\n",str3);
    return 0;
}
