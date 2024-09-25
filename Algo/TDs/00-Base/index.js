'use strict';
/* CDC 
*/
var title='TD xxx';	// à changer à chaque TD (par l'objectif pédagogique)

function main() {
		// modifier ICI !!!
	let a=23;
	let b=39;
	console.log("main: ", a+b);	// écrire dans la console
	//alert ("main");		// popup ... ou debugger!
}

function setTitle () {
	document.getElementById ('title').innerHTML = title;
}

document.addEventListener ("DOMContentLoaded", function (){setTitle();main()});

