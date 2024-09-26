# ESGI@Algo ESGI1 2023/2024
------------------
# 1/ Objectif
- Table de Hashage (ou encore annuaire ou tableau associatif ou tableau à clé) : association clé/valeur
- Tableau
- Objet spécifique

# 2/ Todo
Un département, c'est un chef-lieu, une population, un nom, un lieu emblématique 
ex: "Toulouse", 1.4 Million, "HteGaronne", "Place du Capitole".
La France comporte des départements que l'on souhaite gèrer par leur numéro
(ex: 31->{"Toulouse", 1.4, "HteGaronne", "Place du Capitole"}), et ainsi de suite
Pouvez-vous rentrer quelques depts dans le système et être capable de faire une recherche? 

# 3/ Consignes
Il faut une fonction d'ajout de département (rajouter Ariège, Haute-garonne par exemple) et faire un rendu de département à partir du numéro?

# 4/ Résultats attendus
j'ai rentré le 31, le 09, le 32:
affiche(31) génère: "Toulouse", "HteGaronne", 1.4
affiche(32) génère: "Auch", "Gers", 0.5
afficher(292) génère: Erreur!   // pas de dept de num 292!!

# 5/ Aide
Le pays est donc un hastable de départements
1-> Ain, 31-> htGaronne
et un dept est un objet "complexe" comportant plusieurs champs (chefLieu, pop, nom)

- en JS:
-- 1/ affecter une hastable (donner la clé, la valeur, la faire correspondre):
ex: 
pays[09]={name: "Ariège", pop:0.5, city: "Foix"}

-- 2/ Pour lister une hastable:
for (let key in pays) {
    dept=pays[key]
    console.log (dept)
}

-- 3/ Créer un objet: Obj = {key1: value1, key2: value2, ...}
créer un objet o de type Obj: let o=Object.create (Obj)
modifier o: o.key1 =  value1-1
ou o= = {key1: value1-1, key2: value2-2, ...}
