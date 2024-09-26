
def fibo_r(nombre_elements=7,suite=[1,1]) -> list:

    if nombre_elements <= 2:
        return suite
    else:
        nouveau_chiffre = suite[-2] + suite[-1]
        return fibo_r(nombre_elements-1,suite+[nouveau_chiffre])

def fibo_b(nombre_elements=7) -> list:

    nombres_suite = [1,1]

    for _ in range(nombre_elements-2):
        nouveau_chiffre = nombres_suite[-2] + nombres_suite[-1]
        nombres_suite.append(nouveau_chiffre)
    
    return nombres_suite

def main() -> list:
    
    method = input("Voulez vous utiliser la recursive ou les boucles ? [R/B] ")

    while not (method == "R" or method == "B"):
        method = input("Voulez vous utiliser la recursive ou les boucles ? [R/B] ")

    nombre = input("Combien de valeurs voulez vous ? ")

    while not nombre.isdigit():
        nombre = input("Combien de valeurs voulez vous ? ")
    
    nombre = int(nombre)

    if method == "R":
        nombres_suite = fibo_r(nombre)
    else:
        nombres_suite = fibo_b(nombre)

    return nombres_suite

if __name__ == "__main__":
    print(main())
