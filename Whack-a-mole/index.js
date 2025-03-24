let score = 0;
let gameInterval;
const holes = document.querySelectorAll(".hole");
const gameContainer = document.querySelector(".game-container");
const gameArea = document.getElementById("whack-a-mole");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const scoreDisplay = document.getElementById("score");
const homelink = document.getElementById("home-link");
const highscorelink = document.getElementById("high-scores-link");
const howtoplaylink = document.getElementById("how-to-play-link");
const highscorecontent = document.getElementById("high-scores-content");
const howtoplaycontent = document.getElementById("how-to-play");

gameArea.style.display = "none";
resetBtn.style.display = "none";
scoreDisplay.style.display = "none";

startBtn.addEventListener("click", function () {
  gameArea.style.display = "flex";
  resetBtn.style.display = "block";
  scoreDisplay.style.display = "block ";
  startBtn.style.display = "none";
  startGame();
});

resetBtn.addEventListener("click", function () {
  clearInterval(gameInterval);
  score = 0;
  scoreDisplay.textContent = score;
  holes.forEach(hole => hole.classList.remove("mole"));
  startGame();
});

function showMole() {
  holes.forEach(hole => hole.classList.remove("mole"));
  const randomHole = Math.floor(Math.random() * holes.length);
  holes[randomHole].classList.add("mole");
}

function startGame() {
  clearInterval(gameInterval);
  gameInterval = setInterval(showMole, 1000);
}

gameArea.addEventListener("click", function (event) {
  if (event.target.matches(".mole")) {
    score++;
    scoreDisplay.textContent = score;
    event.target.classList.remove("mole");
  }
});

highscorelink.addEventListener("click", function () {
  howtoplaycontent.style.display = "none  ";
  highscorecontent.style.display = "block";
  startBtn.style.display = "none";
});

howtoplaylink.addEventListener("click", function () {
  highscorecontent.style.display = "none";
  howtoplaycontent.style.display = "block";
  startBtn.style.display = "none";
});

homelink.addEventListener("click", function () {
  highscorecontent.style.display = "none";
  howtoplaycontent.style.display = "none";
  startBtn.style.display = "block";
});




