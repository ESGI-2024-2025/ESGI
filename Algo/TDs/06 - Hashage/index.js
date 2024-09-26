"use strict";
/* CDC
 */
var title = "TD 06"; // à changer à chaque TD (par l'objectif pédagogique)

const getAllCommunes = (departementCode, callback) => {
  const reponse = fetch(
    `https://geo.api.gouv.fr/departements/${departementCode}/communes`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      callback(data);
    });
};
const getAllDepartements = (regionCode, callback) => {
  const response = fetch(
    `https://geo.api.gouv.fr/regions/${regionCode}/departements`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      callback(data);
    });
};

const getAllRegions = (callback) => {
  const response = fetch("https://geo.api.gouv.fr/regions")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      callback(data);
    });
};

function main() {
  const regionCodeRequested = "32";
  const regions = getAllRegions((regions) => {
    regions.map((region) => {
      getAllDepartements(region.code, (departements) => {
        departements.map((departement) => {
          if (departement.code !== "971") {
            getAllCommunes(departement.code, (communes) => {
              communes.map((commune) => {
                setContent(`${commune.nom}`);
              });
            });
          }
        });
      });
    });
  });

  setContent(regions);
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
