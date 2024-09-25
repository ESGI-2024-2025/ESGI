'use strict';
/* CDC 
*/
var title='TD 04 (boucles)';	// à changer à chaque TD (par l'objectif pédagogique)

function main() {
		// modifier ICI !!!
		const NB_MAX=8000;
		let recette=0.0, nb = 3000, prix = 50.0, prixF = prix;
		let recetteMax = nb*prix;
		console.log ("Recette initiale "+recetteMax);
		for (nb=3000; nb < NB_MAX; nb += 100) {
			recette = prix*nb;
			//console.log ("prix:" + prix + " Recette: " + recette);
			if (recette >= recetteMax) {
				recetteMax=recette;
				prixF = prix;
			}
				//pas de break, pas préjuger que ça ne va pas re-augmenter!
			prix -= 0.60;
		}
		console.log ("Recette max: ", recetteMax.toFixed(2), " avec prix: ", prixF.toFixed(2));	
}

function setTitle () {
	document.getElementById ('title').innerHTML = title;
}

document.addEventListener ("DOMContentLoaded", function (){setTitle();main()});

