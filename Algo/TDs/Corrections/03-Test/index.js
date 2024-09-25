'use strict';
/* CDC 
*/
var title='TD 03 (test)';	// à changer à chaque TD (par l'objectif pédagogique)

function main() {
		// modifier ICI !!!
		// init
	let year = parseInt(prompt("Année ?", 2000)); // convertir en entier

		// traitement partie métier
	let isBissext = false;
		// si (div par 4 et pas par 100) OU (div par 400)
	if((year%4 === 0 && year%100 !== 0) || (year%400 === 0)){
		isBissext = true;
	}

		// rendu avec une expression ternaire
	console.log ( isBissext ? 
		year + " est bissextile" : 
		year + " n'est pas bissextile");
	alert (isBissext ? 
		year + " est bissextile" : 
		year + " n'est pas bissextile");
}

function setTitle () {
	document.getElementById ('title').innerHTML = title;
}

document.addEventListener ("DOMContentLoaded", function (){setTitle();main()});

