#include <stdio.h>

int main(void) {
  int a = 1;
  if (a++ && (a == 1))
    printf("Oui\n");
  else
    printf("Non\n");
}
