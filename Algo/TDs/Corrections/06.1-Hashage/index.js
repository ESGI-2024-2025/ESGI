'use strict';

var title='TD 6.2.1 Table Hash/objets';	// à changer à chaque TD (par l'objectif pédagogique)

const DEPT={city: "", pop: 0.0, name: "", place: ""};  // chef-lieu, pop (million), nom dept, place
const COUNTRY = []; // un ensemble de DEPTs récupérables par leur numéro
/*
en python: 
    dept = {"city": "", "pop": 0.0, "name": "", "place": ""}
    country = {}
    country[num] = dept
*/
function main() {
    populate();
    list();

    let depts = [31, 75, 34, 13, 56]
    for (let num of depts)
        console.log (num, get(num));
    console.log ("  Dept le plus peuplé: " + getMostPopulatedDept());
    update(75, 4.2)
    remove(13);
    list();
}
function populate() {
    add(31, "Toulouse", 1.4, "Haute-Garonne", "Capitole");
    add(75, "Paris", 4.0, "Paris", "Tour Eiffel");
    add(13, "Marseille", 2.5, "Bouches-du-Rhône", "Canebière");
    add(34, "Montpellier", 1, "Hérault", "Comédie");

}
function add(num, city, pop, name, place) {
    console.log ("  Rajout du dept: ", name);
    let dept = Object.create(DEPT);
    dept.city=city;
    dept.pop=pop;
    dept.name=name;
    dept.place=place;

    COUNTRY[num]=dept;  // ma clé=le num , ma valeur=structure (rajout annuaire)

}
function remove(numToFind) {
    console.log ("  Delete du dept: ", numToFind);
    if (! COUNTRY[numToFind])   // n'existe pas dans l'annuaire
        return false;
    delete(COUNTRY[numToFind]);

}

function get (numToFind) {
    console.log ("  Récup dept: ", numToFind);
    if (! COUNTRY[numToFind])   // n'existe pas dans l'annuaire
        return false;
    return(edit(numToFind));
}
function update (numToFind, pop) {
    console.log ("  Update dept: ", numToFind);
    if (! COUNTRY[numToFind])   // n'existe pas dans l'annuaire
        return false;
    COUNTRY[numToFind].pop = pop
    return(edit(numToFind));
}

function list() {
    console.log ("  List depts: ");
    for (let num in COUNTRY) {
        console.log(edit(num));
    }
}
function edit(num) {
    return COUNTRY[num].name + " " + COUNTRY[num].city + " " 
    + COUNTRY[num].pop + " " + COUNTRY[num].place;
}
function getMostPopulatedDept() {
    let name = "";
    let max = 0.0;
    for (let num in COUNTRY) {
        if( parseFloat(COUNTRY[num].pop) > max){
            max = parseFloat(COUNTRY[num].pop);
            name = COUNTRY[num].name;
        }
    }
    return name;
}

function setTitle () {
	document.getElementById ('title').innerHTML = title;
}

document.addEventListener ("DOMContentLoaded", function (){setTitle();main()});

