#include <stdio.h>
#include <malloc.h>

typedef struct Queue{
    int * pBase;
    int front;
    int rear;
}QUEUE;

void init(QUEUE *);
int en_queue(QUEUE *, int val);
void traverse_queue(QUEUE *);
int out_queue(QUEUE *, int *);


int main() {
    Queue Q;
    init(&Q);
    en_queue(&Q, 1);
    en_queue(&Q, 2);
    en_queue(&Q, 3);
    traverse_queue(&Q);

    return;
}

void init(QUEUE * pQ) {
    pQ->pBase = (int *)malloc(sizeof(int)*6);
    pQ->front = 0;
    pQ->rear = 0;
}

int full_queue(QUEUE * pQ){
    if((pQ->rear+1)%6 == pQ->front){
        return 0;
    }else {
        return 1;
    }
}

int empty_queue(QUEUE * pQ){
    if((pQ->front == pQ->rear){
        return 0;
    }else {
        return 1;
    }
}

int en_queue(QUEUE * pQ, int val){
    if(full_queue(pQ) == 0) {
        return 0;
    }else {
        pQ->pBase[pQ-rear] = val;
        pQ->rear = (pQ->rear + 1)%6;
    }
}

void traverse_queue(QUEUE *){
    int i = pQ->front;
    while(i != pQ->rear) {
        printf("%d",pQ->pBase[i]);
        i = (i+1)%6;
    }
    return;
}

int out_queue(QUEUE * pQ, int * pVal){
    if(empty_queue(pQ) == 0) {
        return 0;
    }else{
        *pVal = pQ->pBase[pQ->front];
        pQ->front = (pQ->front+1)%6;
        return 1;
    }
}