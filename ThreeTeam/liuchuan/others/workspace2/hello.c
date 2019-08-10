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
