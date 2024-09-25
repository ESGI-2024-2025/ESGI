var title = "TD 03 - Test"; // à changer à chaque TD (par l'objectif pédagogique)

function main() {
  let year = 2024; // Example year
  let result = estBissextile(year) ? "est bissextile" : "n'est pas bissextile";

  // Vous pouvez utiliser cette fonction pour afficher un résultat sur la page.
  setContent("L'année " + year + " " + result);
}

function estBissextile(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
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
