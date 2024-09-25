var title = "TD 03 - Test"; // à changer à chaque TD (par l'objectif pédagogique)

function main() {
  let year = 2024; // Example year
  let result = estBissextile(year) ? "est bissextile" : "n'est pas bissextile";

  // Vous pouvez utiliser cette fonction pour afficher un résultat sur la page.
  setContent("L'année " + year + " " + result);

  testEstBissextile();
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

function testEstBissextile() {
  setContent("Test estBissextile");
  let tests = [
    [2000, true],
    [2004, true],
    [1900, false],
    [2001, false],
  ];
  let success = true;
  tests.forEach((test) => {
    let [year, expected] = test;
    let result = estBissextile(year);
    if (result !== expected) {
      setContent(
        "Test estBissextile: échec pour l'année " +
          year +
          ". Résultat attendu: " +
          expected +
          ". Résultat obtenu: " +
          result
      );
      success = false;
    } else {
      setContent("Test estBissextile: succès pour l'année " + year);
    }
  });
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
