'use strict';

var title='TD 01 (variables)';	// à changer à chaque TD (par l'objectif pédagogique)

function main() {
		// modifier ICI !!!
		// 1/ init du système
	let a = 3;
	let b = 5;
	console.log("a=", a, " b=", b);

		// 2/ travail demandé
	let tmp = b;	// mémoriser b avant de l'écraser
	b = a;	// b écrasé
	a = tmp;	// récup valeur de b

		// 3/ rendu 
	console.log("a=", a, " b=", b);
	alert("a="+a+" b="+b);
	document.write("<H1>a="+a+" b="+b+"</H1>");
}

function setTitle () {
	document.getElementById ('title').innerHTML = title;
}

document.addEventListener ("DOMContentLoaded", function (){setTitle();main()});

