"use strict";

let secretNum = Math.trunc(Math.random() * 20) + 1;
console.log(secretNum);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when no input
  if (!guess) {
    // document.querySelector(".message").textContent = "plz enter Any num";
    displayMessage("plz enter Any num");

    // when wrong guess
  } else if (guess !== secretNum) {
    if (score > 1) {
      //   document.querySelector(".message").textContent =
      //     guess > secretNum ? "too big number" : "too small number";
      displayMessage(guess > secretNum ? "too big number" : "too small number");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //   document.querySelector(".message").textContent = "you lost the game";
      displayMessage("you lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
  //   else if (guess > secretNum) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "too big number ";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "you lost the game";
  //       document.querySelector(".score").textContent = 0;
  //     }

  //when too small no
  //   } else if (guess < secretNum) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "too small number ";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "you lost the game";
  //       document.querySelector(".score").textContent = 0;
  //     }

  //when player won
  else if (guess === secretNum) {
    // document.querySelector(".message").textContent =
    //   "congratulations Correct guess you have won...!";
    displayMessage("congratulations Correct guess you have won...!");
    document.querySelector(".number").textContent = secretNum;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".check").style.display = "none";
    debugger;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
      console.log(highScore);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  console.log(secretNum);

  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  //   document.querySelector(".number").value = secretNum;
  //   document.querySelector(".message").textContent = "congratulations Correct guess you have won...!";
  displayMessage("congratulations Correct guess you have won...!");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".check").style.display = "block";
});
