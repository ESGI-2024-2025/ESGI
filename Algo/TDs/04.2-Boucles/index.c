#include <stdio.h>
#include <stdlib.h>

#define EXIT_SUCCESS 0

int main() {
    int height = 0, ropeLength = 200;

    int maxArea = 0;
    int maxAreaHeight = 0;
    int maxAreaWidth = 0;

    while (height < ropeLength) {
        int width = ropeLength - height * 2;
        int area = height * width;

        printf("Height: %d, Width: %d, Area: %d\n", height, width, area);
        
        if (area > maxArea && width != height) {
            maxArea = area;
            maxAreaHeight = height;
            maxAreaWidth = width;
        }
        height++;
    }

    printf("The maximum area is %d with a height of %d and a width of %d\n", maxArea, maxAreaHeight, maxAreaWidth);

    return EXIT_SUCCESS;
}