#include <stdio.h>
int main(int argc, char const *argv[])
{
    printf("输入第一个值a： \n");
    int a;
    scanf("%d",&a);
    printf("输入第二个值b： \n");
    int b;
    scanf("%d",&b);
    printf("a+b=%d\n",a+b);
    printf("然后，来计算除法了\n");
    
    int i,j ;
    printf("请输入被除数：\n");
    scanf("%d",&i);
    printf("请输入除数：\n");
    scanf("%d",&j);
    if (0!=j)
    {
        printf("%d÷%d=%d\n",i,j,i/j);
    }else
    {
        printf("除数不能为0\n");
        fprintf(stderr,"报错信息，除数不能为零！\n");
        return 1;
    }
    
    






    return 0;
}
