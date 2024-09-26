#include <stdio.h>
#include <stdlib.h>

#define RANG 10

#define EXIT_SUCCESS 0

// Récursif
int fibo(int a) {
    if (a == 0)
    {
        return 0;
    }
    else if (a == 1)
    {
        return 1;
    }
    else
    {
        return fibo(a - 1) + fibo(a - 2);
    }
}

// Itératif
int fibo2(int a) {
    int i = 0;
    int j = 1;
    int k = 0;
    for (int l = 0; l < a; l++)
    {
        k = i + j;
        i = j;
        j = k;
    }
    return i;
}

int main() {
    int result_recursif = fibo(RANG);
    printf("Résultat (récursif): %d\n", result_recursif);
    
    int result_iteratif = fibo2(RANG);
    printf("Résultat (itératif): %d\n", result_iteratif);

    return EXIT_SUCCESS;
}