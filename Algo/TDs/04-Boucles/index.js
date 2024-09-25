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

  let maxTotal = 0;
  let maxIndividualPrice = 0;
  let maxTotalSpectator = 0;

  while (spectators < maxSpectator) {
    newPrice = newPrice - 0.6;
    spectators = spectators + 100;

    let total = newPrice * spectators;
    if (total > maxTotal) {
      maxTotal = total;
      maxIndividualPrice = newPrice;
      maxTotalSpectator = spectators;
    }
  }

  setContent(
    "Le prix du billet est de " +
      maxIndividualPrice +
      "€ pour " +
      maxTotalSpectator +
      " spectateurs."
  );
  setContent("La recette est de " + maxTotal + "€.");
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
