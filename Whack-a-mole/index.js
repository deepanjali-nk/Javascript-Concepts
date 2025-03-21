let score = 0;
const holes = document.querySelectorAll(".hole");

function showMole() {
  holes.forEach(hole => hole.classList.remove("mole"));
  const randomHole = Math.floor(Math.random() * holes.length);
  holes[randomHole].classList.add("mole");
}

setInterval(showMole, 1000);
const gameArea = document.getElementById("whack-a-mole");
gameArea.addEventListener("click", function (event) {
  if (event.target.matches(".mole")) {
    score++;
    document.getElementById("score").textContent = score;
    event.target.classList.remove("mole");
  }
});

