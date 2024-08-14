"use strict";

// Elementos del DOM
const message = document.getElementById("message");
const guessNumber = document.getElementById("guessNumber");
const secretNumber = document.getElementById("secretNumber");
const checkBtn = document.getElementById("checkBtn");
const tryAgainBtn = document.getElementById("tryAgainBtn");
const currentScore = document.getElementById("currentScore");
const highScore = document.getElementById("highScore");
const timeLeft = document.getElementById("timeLeft");

// Variables
let score = 20;
let playerHighScore = 20;
let playerTimesLeft = 10;

// Arrays
let highScoreArray = [];
let guessNumberArray = [];

// Funciones
const defaultMessage = function (a) {
  return (message.innerHTML = a);
};
// Funcion principal
const playerScore = function () {
  return (
    (highScore.innerHTML = playerHighScore),
    (currentScore.innerHTML = score),
    (timeLeft.innerHTML = playerTimesLeft)
  );
};
// Generar numero secreto
const generateSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

// Eventos
tryAgainBtn.addEventListener("click", () => {
  defaultMessage("Start guessing...", "");
});

// llamando funciones
playerScore();
generateSecretNumber();
