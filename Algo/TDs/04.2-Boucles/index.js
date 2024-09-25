"use strict";
/* CDC
 */
var title = "TD 04"; // à changer à chaque TD (par l'objectif pédagogique)

function main() {
  const ropeLength = 200;

  let heigth = 0;

  let maxArea = 0;
  let maxAreaHeigth = 0;
  let maxAreaWidth = 0;

  while (heigth < ropeLength) {
    let width = ropeLength - heigth;
    let area = width * heigth;

    if (area > maxArea) {
      maxArea = area;
      maxAreaHeigth = heigth;
      maxAreaWidth = width;
    }

    heigth++;
  }

  setContent(
    `La superficie maximale est de ${maxArea}m² pour une hauteur de ${maxAreaHeigth}m et une largeur de ${maxAreaWidth}m.`
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
