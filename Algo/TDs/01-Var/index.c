#include <stdio.h>
#include <stdlib.h>

#define EXIT_SUCCESS 0

void inverser(int *a, int *b) {
    int c = *a;
    *a = *b;
    *b = c;
}

int main() {

    int a = 5, b = 10;

    inverser(&a, &b);

    // Print a and b
    printf("a = %d, b = %d\n", a, b);

    return EXIT_SUCCESS;
}