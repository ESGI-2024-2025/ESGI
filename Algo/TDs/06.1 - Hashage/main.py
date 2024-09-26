
from json import load, dumps
from os import path

def main() -> list:
    
    hastable = {}

    while True:

        action = input("\nVoulez vous récuperer un departement, en créer un, sauvegarder la table ou l'importer ? [R, C, S, I] ").capitalize()

        if action == "R":

            departement = input("\nQuel departement recuperer ? ")

            while not departement.isdigit():
                departement = input("Quel departement recuperer ? ")

            if departement in hastable:
                print("Chef-lieu :",hastable[departement][0])
                print("Nb habitants (millions) :",hastable[departement][1])
                print("Departement :",hastable[departement][2])
                print("Lieu emblematique :",hastable[departement][3])

            else:
                print("Ce departement n'est pas disponible dans la table.")
                continue

        elif action == "C":

            num = input("\nQuel departement créer ? ")

            while not num.isdigit():
                num = input("Quel departement créer ? ")

            if not num in hastable:

                chef = input("\nEntrez un chef lieu: ")

                while chef.isdigit():
                    chef = input("Entrez un chef lieu: ")

                wrong = True

                while wrong:
                    nb = input("Entrez un nombre d'habitants (millions): ")
                
                    try:
                        nb = float(nb)
                        wrong = False
                    except:
                        pass
                
                departement = input("Entrez un departement: ")

                while departement.isdigit():
                    departement = input("Entrez un departement: ")

                place = input("Entrez une place emblematique: ")

                while place.isdigit():
                    place = input("Entrez une place emblatique: ")

                hastable[num] = [chef, nb, departement, place]

            else:
                print("Ce departement existe déjà dans la table.")
                continue

        elif action == "S":

            name = input("Quel nom donner au fichier JSON ? ")

            with open(name+".json","w") as file:
                file.write(dumps(hastable,indent=4))

            print("BDD sauvegardée !")

        elif action == "I":

            name = input("Quel est le nom du fichier JSON ? ")

            while not path.exists(name+".json"):
                name = input("Ce fichier n'existe pas.\nQuel est le nom du fichier JSON ? ")

            with open(name+".json") as file:
                hastable = load(file)

            print("BDD importée !")

        else:
            print("Le choix n'est pas valide.")
            continue

if __name__ == "__main__":
    print(main())
