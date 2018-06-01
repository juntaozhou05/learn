#include <stdio.h>

void f();
void g();
void k();

void f() {
    printf("fff\n");    
    g();
    printf("111\n");
}

void g() {
    printf("ggg\n");
    k();
    printf("222\n");
}

void k() {
    printf("kkk\n");  
}

int main(void) {
    f();

    return 0;
}




