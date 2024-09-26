'use strict';
/* CDC 
*/
var title='TD 05.2.1 (fonctions recursives, Fibonacci)';	// à changer à chaque TD (par l'objectif pédagogique)

function main() {
		// modifier ICI !!!
	let n=parseInt(prompt ("un nombre svp?"));
	for (let i=4; i <= n; i++) 
		console.log ("Fib(" +i+ ")=" + 
			fibLoop(i) + " (ou en récursif: "+  fibRec(i) + ")");		// non récursif et récursif

}
function fibLoop (n) {	// boucle classique
		let a, b, temp;
		a = 0;	// fib 0 = 0
		b = 1;	// fib 1 = 1 (conditions initiales)
		for (let i = 0; i < n; i++) {
			temp = b;	// mémo 2ème valeur
			b = a + b;	// maj
			a = temp;	// incrémentation 1ère valeur
		}
		return a;
}
function fibRec (n) {	
	if (n <=1)	// condition limite
		return n;
	return fibRec(n-1) + fibRec(n-2);	// récurrence plus facile
}

function setTitle () {
	document.getElementById ('title').innerHTML = title;
}

// --- gestion d'évnmt
function onLoadStart() {	// de type callback
	setTitle();
	main();
}
document.addEventListener ("DOMContentLoaded", onLoadStart);

