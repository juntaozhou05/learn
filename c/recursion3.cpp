#include <stdio.h>

//阶乘
int factorial(int n) {
    // if(1 == n) {
    //     return 1;
    // }else {
    //     return n*factorial(n-1);
    // }
    while(n>1){
        return n*factorial(n-1);
    }
    return 1;
}

//1加到100
int add(n) {
    if(n == 1) {
        return 1;
    }else {
        return n + add(n-1);
    }
}

int main(void) {
    // printf("%d\n",factorial(3));
    printf("%d\n",add(100));

    return 0;
}




