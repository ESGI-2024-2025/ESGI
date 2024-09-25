#include <stdio.h>
#include <stdlib.h>

#define EXIT_SUCCESS 0

int est_bissextile(int annee) {
    return (annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0;
}

int main() {

    int annee;

    printf("Entrez une année : ");
    scanf("%d", &annee);
    printf("\n");

    if (est_bissextile(annee)) {
        printf("L'année %d est bissextile.\n", annee);
    } else {
        printf("L'année %d n'est pas bissextile.\n", annee);
    }
    

    return EXIT_SUCCESS;
}