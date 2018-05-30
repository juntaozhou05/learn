#include <stdio.h>
#include <malloc.h>
#include <stdlib.h>

typeof struct Node{
    int data;
    struct Node * pNext;
}NODE, *PNODE;

struct Stack{
    PNODE pTop;
    PNODE pBottom;
}STACK, * PSTACK;  //PSTACK 等价于 struct STACK *

void init (PSTACK);
void push (PSTACK,int);
void traverse (PSTACK);
int traverse (PSTACK,int *);

int main(void) {
    STACK S; //STACK 等价于 struct Stack

    int val;
    
    init(&S);
    push(&S,1);
    push(&S,2);
    push(&S,3);
    push(&S,4);
    push(&S,5);

    pop(&S,int)
    traverse(&S,&val);

    return 0;
}

void init(PSTACK pS) {
    pS->pTop = (PNODE)malloc(sizeof(NODE));
    if(NULL == pS->pTop) {
        printf("动态内存分配失败！\n");
        exit(-1);
    }else {
        pS->pBottom = pS->pTop;
        pS->pTop->pNext = NULL;
    }
}

void push(PSTACK pS,int val) {
    PNODE pNew = (PNODE)malloc(sizeof(NODE));
    pNew->data = val;
    pNew->pNext = pS->pTop;
    pS->pTop = pNew;
    return;
}

void traverse (PSTACK) {
     PNODE p = pS->pTop;
     while(p != pS->pBottom) {
         printf("%d",p->data);
         p = p->pNext;
     }
     printf("\n");
     return;
}

int empty(PSTACK pS) {
    if(pS->pTop == pS->pBottom) {
        return 0;
    }else {
        return 1;
    }
}

int traverse (PSTACK pS ,int * pVal) {
    if(empty(pS) == 0) {
        return 0;
    }else {
        PNODE r = pS->pTop;
        pS->pTop = r->pNext;
        free(r);
        r = NULL;
        return 1;
    }
}

void clear(PSTACK pS) {
    if(empty(pS) == 0) {
        return;
    }else {
        PNODE p = pS->pTop;
        PNODE q = NULL;
        while(p != pS->pBottom) {
            q = p->pNext;
            free(p);
            p = q;
        }
    }
    pS->pTop = pS->pBottom;
}
