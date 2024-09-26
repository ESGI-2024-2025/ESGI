#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define EXIT_SUCCESS 0
#define EXIT_FAILURE 1

int lancerDe(int faces) {
    return rand() % faces + 1;
}

void lancerDes(int launchTimes, int faces, int *results) {
    for (int i = 0; i < launchTimes; i++) {
        results[i] = lancerDe(faces);
    }
}

void simulerLancerDes(int simulationTime, int launchTimes, int faces, int *allResults) {
    for (int i = 0; i < simulationTime; i++) {
        lancerDes(launchTimes, faces, &allResults[i * launchTimes]);
    }
}

int main() {
    int simulationTime = 1000000;
    int launchTimes = 2;
    int faces = 6;
    int goodFace = 6;

    srand(time(NULL)); // Initialisation du générateur de nombres aléatoires

    int *allResults = (int*) malloc(simulationTime * launchTimes * sizeof(int));
    if (allResults == NULL) {
        fprintf(stderr, "Memory allocation failed\n");
        return EXIT_FAILURE;
    }

    simulerLancerDes(simulationTime, launchTimes, faces, allResults);

    int somme = 0;

    for (int i = 0; i < simulationTime; i++) {
        int isCorrect = 1;
        for (int j = 0; j < launchTimes; j++)
        {
            if (allResults[i * launchTimes + j] != goodFace) {
                isCorrect = 0;
                break;
            }
        }
        if (isCorrect) {
            somme++;
        }
    }

    double proba = (double) somme / simulationTime;

    printf("Proba d'obtenir %d sur %d lancers de %d dés à %d faces : %f\n", goodFace, launchTimes, simulationTime, faces, proba * 100);

    free(allResults);
    return EXIT_SUCCESS;
}