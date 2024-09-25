"use strict";
/* CDC
 */
var title = "TD 04"; // à changer à chaque TD (par l'objectif pédagogique)

function main() {
  const waitedSpectator = 3000;
  const maxSpectator = 8000;
  const initialPrice = 50;
  let newPrice = initialPrice;
  let spectators = waitedSpectator;

  while (spectators < maxSpectator) {
    newPrice = newPrice - 0.6;
    spectators = spectators + 100;
  }

  setContent(
    "Le prix du billet est de " +
      newPrice +
      "€ pour " +
      spectators +
      " spectateurs."
  );
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
