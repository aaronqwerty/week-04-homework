let highScores = document.getElementById("high-scores-section")
let highScoresListEl = document.getElementById("high-scores-list")

function getHighScores() {
  let storage = window.localStorage;
  if (JSON.parse(storage.getItem("scoreSet")) === null) {
    localStorage.setItem("scoreSet", JSON.stringify([]));
  }
  let storedScore = JSON.parse(storage.getItem("scoreSet"));
  console.log(typeof storedScore);
  storedScore.sort(function (a, b) {
    return b.score - a.score;
  });
  console.log(storedScore);

  for (i = 0; i < storedScore.length; i++) {
    let liEl = document.createElement("li");
        if (parseInt(i) % 2 === 0){
            liEl.setAttribute("style", "background-color: var(--high-score-list-col-1)");
        } else if (parseInt(i) % 2 !== 0) {
            liEl.setAttribute("style", "background-color: var(--high-score-list-col-2)");
        }
    highScoresListEl.appendChild(liEl)
    highScoresListEl.children[i].textContent = (i + 1) + ". " + storedScore[i]["initials"].toUpperCase() + " | " + storedScore[i]["score"];
  }
}

getHighScores();


function clearLocal() {
    localStorage.clear();
   // location.reload();

}