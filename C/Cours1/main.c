#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define EXIT_SUCCESS 0
#define EXIT_FAILURE 1

enum Couleur {
    COEUR, CARREAU, PIQUE, TREFLE
};

enum Valeur {
    SEPT = 7, HUIT, NEUF, DIX, VALET, DAME, ROI, AS
};

typedef struct {
    enum Couleur couleur;
    enum Valeur valeur;
} Carte;

void initialiserJeu(Carte jeu[32]) {
    int index = 0;
    for (int c = COEUR; c <= TREFLE; c++) {
        for (int v = SEPT; v <= AS; v++) {
            jeu[index].couleur = c;
            jeu[index].valeur = v;
            index++;
        }
    }
}

void melangerJeu(Carte jeu[32]) {
    srand(time(NULL));
    for (int i = 31; i > 0; i--) {
        int j = rand() % (i + 1);
        Carte temp = jeu[i];
        jeu[i] = jeu[j];
        jeu[j] = temp;
    }
}

void afficherCarte(Carte carte) {
    const char *couleurs[] = {"Coeur", "Carreau", "Pique", "Trèfle"};
    const char *valeurs[] = {"", "", "", "", "", "", "", "7", "8", "9", "10", "Valet", "Dame", "Roi", "As"};
    printf("%s de %s\n", valeurs[carte.valeur], couleurs[carte.couleur]);
}

int main(int argc, char *argv[]) {
  Carte jeu[32];
  initialiserJeu(jeu);
  printf("Cartes du jeu :\n");
  for (int i = 0; i < 32; i++) {
    afficherCarte(jeu[i]);
  }
  printf("\n");

  melangerJeu(jeu);

  printf("Cartes du jeu :\n");
  for (int i = 0; i < 32; i++) {
    afficherCarte(jeu[i]);
  }

  return EXIT_SUCCESS;
}
