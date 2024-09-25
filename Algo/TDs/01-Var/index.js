"use strict";
/* CDC
 */
var title = "TD 01 - Var"; // à changer à chaque TD (par l'objectif pédagogique)

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

let contents = [];

const setContent = (content) => {
  contents.push(content);
  document.getElementById("content").innerHTML = contents.join("<br>");
};

document.addEventListener("DOMContentLoaded", function () {
  setTitle();
  main();
});
