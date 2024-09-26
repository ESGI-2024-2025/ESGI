
proba_fille = 49/100
proba_garcon = 51/100

# Fonction qui permet d'obtenir la probabilité de constitution de la famille selon le nombre de filles
def get_proba_number_girls(nb: int) -> float:

    if nb == 4:
        return proba_fille**4
    else:
        return proba_garcon * proba_fille**nb

# Calculer l'esperance
def esperance(probas: list) -> float:

    return sum(probas[i] * i for i in range(len(probas)))

# Recuperer les probabilités d'avoir X filles ou garçons par famille
def get_liste_probas_par_nombre() -> tuple[float,float]:

    probas_par_nombre_filles = []
    probas_par_nombre_garcons = []

    # Stocke dans une liste les probabilités selon le nombre de filles (l'indice de la proba dans la liste representant le nombre de filles)
    for i in range(5):
        probas_par_nombre_filles.append(get_proba_number_girls(i))

    # La probabilité d'avoir aucun garcon est egal à la probabilité d'avoir 4 filles, et la probabilité d'en avoir 1 est égal au complement à 1
    probas_par_nombre_garcons.append(probas_par_nombre_filles[4])
    probas_par_nombre_garcons.append(1 - probas_par_nombre_filles[4])

    return probas_par_nombre_filles, probas_par_nombre_garcons

# Programme principal
def main() -> None:

    # Recuperer la liste des probabilités selon le nombre de filles et de garcons, et calculer l'esperance
    probas_par_nombre_filles, probas_par_nombre_garcons = get_liste_probas_par_nombre()
    esperance_fille = esperance(probas_par_nombre_filles)
    esperance_garcon = esperance(probas_par_nombre_garcons)

    # Afficher le résultat
    print("J'espère obtenir en moyenne",esperance_fille,"filles.")
    print("J'espère obtenir en moyenne",esperance_garcon,"garçons.")

if __name__ == "__main__":
    main()

# Ce programme montre qu'en moyenne, on aura plus de garçons que de filles.
# Ainsi, ce n'est pas une bonne idée : il faudrait augmenter le nombre de filles autorisées par famille.
