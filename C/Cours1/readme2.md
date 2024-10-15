# ESGI/C

# -------

# ES, tests, boucles: tuto 14-16, nb aléatoires

# TODO:

- 1/ Test: tirer 2 dés (donc de 1 à 6) avec rand par exemple et modulo, puis dire qui gagne (ou nul)
- 1.1/ Utiliser une Enum (il y a 3 cas) puis un switch pour présenter la même chose (car il y a 3 cas)
- 2/ 2ème bloc: faire une boucle while : on doit tirer un dé et comptabliser le nombre de tirages pour obtenir un 6
- 3/ 3ème bloc: idem avec un for
- 4/ nb de tirages pour obtenir une paire, un brelan.... (à rapporcher )

# Aide:

- nombre aléatoire: utiliser rand() et srand() (couplé avec modulo %)

ex:
srand(time(NULL)); # initialisation
puis rand() : ramène un entier aléatoire
ex: rand() % 8 ramène un entier aléatoire entre 0 et 7 inclus

(inclure <stdlib.h> et <time.h> pour srand())

- réaliser un grand nombre d'expériences pour obtenir une valeur correspondante avec les règles mathématiques
