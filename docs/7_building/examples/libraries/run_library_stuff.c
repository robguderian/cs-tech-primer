#include <stdio.h>
#include <libadd.h>
#include <libmulti.h>

int main(){
    int x = static_add(1, 2);
    printf("Static lib %d\n", x);
    int y = dynamic_multi(2, 3);
    printf("Dynamic lib %d\n", y);
    printf("Goodbye\n");
    return 0;
}
