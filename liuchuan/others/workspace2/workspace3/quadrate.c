#include<stdio.h>
int global=0;

int rect(int a ,int b)
{
    static int count=0;
    count++;
    global++;
    int s;
    s=a*b;
    return s;
}

int quadrate(int a )
{
    static int count=0;
    count++;
    global++;
    int s=rect(a,a);
    return s;
}

int main(int argc, char const *argv[])
{
    int a=3;
    int b=4;
    int *pa=&a;
    int *pb=&b;
    int *pglobal=&global;
    int (*pquadrate)(int a)=&quadrate;
    int s=rect(a,b);
    printf("矩形的面积是： %d \n",s);
    return 0;
}
