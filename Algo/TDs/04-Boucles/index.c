#include <stdio.h>
#include <stdlib.h>

#define EXIT_SUCCESS 0

int main() {

    int waitedSpectators = 3000, maxSpectator = 8000, initialPrice = 50;
    
    float newPrice = initialPrice;
    int spectators = waitedSpectators;

    float maxPrice = 0;
    int maxPriceSpectator = 0;
    float maxTicketPrice = 0;

    while (spectators < maxSpectator) {
        newPrice = newPrice - 0.6;
        spectators = spectators + 100;

        float total = newPrice * spectators;
        if (total > maxPrice) {
            maxPrice = total;
            maxPriceSpectator = spectators;
            maxTicketPrice = newPrice;
        }
    }

    printf("The new price is %f with %d spectators\n", maxTicketPrice, maxPriceSpectator);
    printf("The total income is average %.2f€ (exact: %f€)\n", maxPrice, maxPrice);

    return EXIT_SUCCESS;
}