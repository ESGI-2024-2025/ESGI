#include <stdio.h>
#include <stdlib.h>

#define EXIT_SUCCESS 0

int main() {

    int waitedSpectators = 3000, maxSpectator = 8000, initialPrice = 50;
    float newPrice = initialPrice;
    int spectators = waitedSpectators;

    while (spectators < maxSpectator) {
        newPrice = newPrice - 0.6;
        spectators = spectators + 100;
    }

    printf("The new price is %f with %d spectators\n", newPrice, spectators);
    printf("The total income is average %.2f€ (exact: %f€)\n", newPrice * spectators, newPrice * spectators);

    return EXIT_SUCCESS;
}