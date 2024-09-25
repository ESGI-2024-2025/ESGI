"use strict";
/* CDC
 */
var title = "TD xxx"; // à changer à chaque TD (par l'objectif pédagogique)

const inverse = (a, b) => {
  let c = a;
  a = b;
  b = c;
  console.log(a, b);
};

function main() {
  let a = 23;
  let b = 45;

  inverse(a, b);
}

function setTitle() {
  document.getElementById("title").innerHTML = title;
}

document.addEventListener("DOMContentLoaded", function () {
  setTitle();
  main();
});
