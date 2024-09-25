"use strict";
/* CDC
 */
var title = "TD 01"; // à changer à chaque TD (par l'objectif pédagogique)

function main() {
  let a = 23;
  let b = 45;

  let c = a;
  a = b;
  b = c;

  // Vous pouvez utiliser cette fonction pour afficher un résultat sur la page.
  setContent("a = " + a + " et b = " + b);
}

function setTitle() {
  document.getElementById("title").innerHTML = title;
}

const setContent = (content) => {
  document.getElementById("content").innerHTML = content;
};

document.addEventListener("DOMContentLoaded", function () {
  setTitle();
  main();
});
