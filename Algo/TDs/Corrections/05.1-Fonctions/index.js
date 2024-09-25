'use strict';

var title='TD 05 Probas, Fonctions ESGI1';	// à changer à chaque TD (par l'objectif pédagogique)

const EXP_NB=1000000;

function main() {
	let successNb = 0;
	for (let i=0; i < EXP_NB; i++) {
		if (expDice(6, 3))	// je cherche un 6 sur les 3 dés
			successNb++;
	}
	console.log ("3 dés recherche 6, nb Exp: ", EXP_NB, 
		" success: ", successNb, " proba: ", successNb/EXP_NB, " maths: ", Math.pow(1/6, 3));

	successNb = 0;
	for (let i=0; i < EXP_NB; i++) {
		if (expDice(6, 4))	// je cherche un 6 sur les 4 dés
			successNb++;
	}
	console.log ("4 dés recherche 6, nb Exp: ", EXP_NB, 
		" success: ", successNb, " proba: ", successNb/EXP_NB, " maths: ", Math.pow(1/6, 4));

	successNb = 0;
	for (let i=0; i < EXP_NB; i++) {
		if (expDice(6, 5))	// je cherche un 6 sur les 3 dés
			successNb++;
	}
	console.log ("YAMs de 6 (5 6 /5 dés), nb Exp: ", EXP_NB, 
		" success: ", successNb, " proba: ", successNb/EXP_NB, " maths: ", Math.pow(1/6, 5));

}

function expDice(val, diceNb) {	// la valeur recherchée, le nombre de dés
	for (let i=0; i < diceNb; i++) {
		let alea = randomInt (1, 6);	// valeur courante du dé (entre 1 et 6)
		if (val != alea) 
			return false;	// on sort dès qu'un dé ne matche pas
	}
	return true;
}

function randomInt (min, max) {	// exemple de fonction
	return parseInt(Math.random() * (max) + min)
}

function setTitle () {
	document.getElementById ('title').innerHTML = title;
}

document.addEventListener ("DOMContentLoaded", function (){setTitle();main()});

