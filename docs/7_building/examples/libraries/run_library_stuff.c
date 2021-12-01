#include <stdio.h>
#include <libadd.h>

int main(){
    int x = static_add(1, 2);
    printf("Static lib %d\n", x);
    printf("Goodbye\n");
    return 0;
}