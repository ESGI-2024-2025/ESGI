#include <stdio.h>
#include <stdlib.h>

#define EXIT_SUCCESS 0
#define EXIT_FAILURE 1

struct Matrice {
  **tab[];
  int nbCol;
  int nbLig;
};

typedef Matrice tMatrice;

tMatrice matriceAlloue(int nbCol, int nbLig) {

  int **tab = malloc(nbLig * sizeof(int *));
  for (int i = 0; i < nbLig; i++) {
    tab[i] = malloc(nbCol * sizeof(int));
    if (tab[i] == NULL) {
      fprintf(stderr, "Erreur d'allocation de mémoire\n");
      exit(EXIT_FAILURE);
    }
  }

  tMatrice *mat = (tMatrice) malloc(sizeof(tMatrice));
  if (*mat == NULL) {
    fprintf(stderr, "Erreur d'allocation de mémoire\n");
    exit(EXIT_FAILURE);
  }


  *mat -> tab = tab;
  *mat.nbCol = nbCol;
  *mat.nbLig = nbLig;

  return mat;
}

int matriceInitialise(tMatrice mat) {
  for (int i = 0; i < mat.nbCol; i++) {
    for (int j = 0; j < mat.nbLig; j++) {
      mat.tab[i][j] = 0;
    }
  }
  return EXIT_SUCCESS;
}

int matriceAffiche(tMatrice mat) {
  for (int i = 0; i < mat.nbLig; i++) {
    for (int j = 0; j < mat.nbCol; j++) {
      printf("%d ", mat.tab[i][j]);
    }
    printf("\n");
  }
  return EXIT_SUCCESS;
}
}

int main(int argc, char *argv[]) {
  tMatrice mat = matriceAlloue(3, 3);
  matriceInitialise(mat);
  matriceAffiche(mat);

  return EXIT_SUCCESS;
}
