#include<stdio.h>
int main(int argc, char const *argv[])
{
    int a ;
    int b ;
    int c ;
    int list[2];
    printf("输入a 的值：");
    scanf("%d",&a);
    list[0]=a;
    printf("输入b 的值：");
    scanf("%d",&b);
    if (b>a)
    {
        list[0]=b;
        list[1]=a;
    }else
    {
        list[1]=b;
        list[0]=a;    
    }
    printf("输入c 的值：");
    scanf("%d",&c);
    if (c>list[0])
    {
        printf("%d\n",c);
        printf("%d\n",list[0]);
        printf("%d\n",list[1]);  
    }else if (list[1]>c)
    {
        printf("%d\n",list[0]);
        printf("%d\n",list[1]);
        printf("%d\n",c);
    }else
    {
        printf("%d\n",list[0]);
        printf("%d\n",c);
        printf("%d\n",list[1]);
    }
    return 0;   
}
