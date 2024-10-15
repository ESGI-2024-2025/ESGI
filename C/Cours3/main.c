#include <stdio.h>
#include <stdlib.h>

#define EXIT_SUCCESS 0
#define EXIT_FAILURE 1

int deplacer(int *x, int *y, int *z, int nbFois);

int main(int argc, char *argv[]) {
  int x = 0, y = 0, z = 0;
  int nbDeplacements = argv[1] ? atoi(argv[1]) : 1;

  deplacer(&x, &y, &z, nbDeplacements);

  printf("x = %d, y = %d, z = %d\n", x, y, z);

  return EXIT_SUCCESS;
}

int deplacer(int *x, int *y, int *z, int nbFois) {
  *x += 2 * nbFois;
  *y += 1 * nbFois;
  *z -= 3 * nbFois;

  return EXIT_SUCCESS;
}
