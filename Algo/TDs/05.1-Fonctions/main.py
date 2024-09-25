
from random import randint

def main(des, number, precis=1) -> None:
    
    occ = 0
    i = 0

    while i <= 1000 * precis:

        i+=1
        de = (randint(1,6) for _ in range(des))

        is_good_number = map(lambda x: x!=number,de)

        if not any(is_good_number):
            occ += 1

    return str(occ/precis)+"/1000"


if __name__ == "__main__":
    nombre_de_des = int(input("Combien de dés voulez vous generer ? "))
    valeur = int(input("Quelle valeur voulez vous tester ? "))
    precision = int(input("Entrez un degré de précision: "))

    print(main(nombre_de_des,valeur,precision))
