import random

class Famille(object):
    def __init__(self, maxGarcons: int, maxEnfants: int) -> None:
        """Initialise une famille

        Args:
            maxGarcons (int): Nombre maximum de garcons
            maxEnfants (int): Nombre maximum d'enfants
        """
        self.maxGarcons = maxGarcons
        self.maxEnfants = maxEnfants
        self.nombreGarcons = 0
        self.nombreFilles = 0
        self.nombreTotal = 0
        
    def getNombreGarcons(self) -> int:
        """Retourne le nombre de garcons

        Returns:
            int: Nombre de garcons
        """
        return self.nombreGarcons
    
    def getNombreFilles(self) -> int:
        """Retourne le nombre de filles

        Returns:
            int: Nombre de filles
        """
        return self.nombreFilles
    
    def getNombreTotal(self) -> int:
        """Retourne le nombre total d'enfants

        Returns:
            int: Nombre total d'enfants
        """
        return self.nombreTotal
        
    def donneNaissance(self) -> bool:
        """Donne naissance à un enfant

        Returns:
            bool: True si l'enfant est né, False sinon
        """
        if self.nombreTotal >= self.maxEnfants:
            return False
        if self.nombreGarcons >= self.maxGarcons:
            return False
        else:
            sexe = random.randint(0, 100)
            if sexe <= 49:
                self.nombreFilles += 1
            else:
                self.nombreGarcons += 1
                
            self.nombreTotal += 1
            
            return True
                
    def faireMaxEnfants(self) -> None:
        """Fait naitre le nombre maximum d'enfants possible
        """
        while self.donneNaissance():
            pass

def totalFille(familles: list) -> int:
    """Retourne le nombre total de filles

    Args:
        familles (list): Liste de familles

    Returns:
        int: Nombre total de filles
    """
    total = 0
    for famille in familles:
        total += famille.getNombreFilles()
    return total

def totalGarcon(familles: list) -> int:
    """Retourne le nombre total de garcons

    Args:
        familles (list): Liste de familles

    Returns:
        int: Nombre total de garcons
    """
    total = 0
    for famille in familles:
        total += famille.getNombreGarcons()
    return total

def totalEnfants(familles: list) -> int:
    """Retourne le nombre total d'enfants

    Args:
        familles (list): Liste de familles

    Returns:
        int: Nombre total d'enfants
    """
    total = 0
    
    for famille in familles:
        total += famille.getNombreTotal()
    return total

def main(nombreDeSimulation: int = 1000, maxEnfants: int = 4, maxGarcons: int = 1) -> None:
    """Lance la simulation et affiche les résultats

    Args:
        nombreDeSimulation (int, optional): Nombre de simulation. Defaults to 1000.
        maxEnfants (int, optional): Nombre maximum d'enfants. Defaults to 4.
        maxGarcons (int, optional): Nombre maximum de garcons. Defaults to 1.
    """
    familles = []
    for _ in range(nombreDeSimulation):
        famille = Famille(maxGarcons, maxEnfants)
        famille.faireMaxEnfants()
        familles.append(famille)
        
    totalNombreFille = totalFille(familles)
    totalNombreGarcon = totalGarcon(familles)
    totalNombreEnfants = totalEnfants(familles)
    
    print(f"Nombre total de filles: {totalNombreFille}")
    print(f"Nombre total de garcons: {totalNombreGarcon}")
    print(f"Nombre total d'enfants: {totalNombreEnfants}")
    print(f"Pourcentage de filles: {(totalNombreFille / totalNombreEnfants * 100)}%")
    print(f"Pourcentage de garcons: {totalNombreGarcon / totalNombreEnfants * 100}%")
    
if __name__ == "__main__":
    main(nombreDeSimulation=100000)
    
    # > Ai-je une bonne idée ou pas?
    # Au vu des résultats, le pourcentage de filles est similaire au pourcentage de garcons.
    # Je pense donc que ce n'est pas une bonne idée.
    
    # > C'est une surprise? ou pas? Expliquer.
    # Ce n'est pas une surprise car le sexe d'un enfant est aléatoire.
    # Ainsi, il est normal que le pourcentage de filles soit similaire au pourcentage de garcons.