#include<stdio.h>
int main(int argc, char const *argv[])
{
    int a=3;
    int b=2;
    int array[3];
    array[0]=1;
    array[1]=10;
    array[2]=1000;
    int *p=&a;
    p[4]=101;
    // *p=a;
    p=&a;
    int i=0;
    for ( i = 0; i < 6; i++)
    {
        printf("*p= %d \n",*p);
        p++;
    }
    return 0;
}
