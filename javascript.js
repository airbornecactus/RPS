let computerWins = 0;
let playerWins = 0;

const btn = document.querySelector("#rock");
btn.addEventListener("click", () => game("rock"));
const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => game("paper"));
const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => game("scissors"));

const score = document.querySelector("#score");
const result = document.createElement("div");
result.classList.add("result");
result.textContent = "The score is:";
score.appendChild(result);

function playerSelection(userChoice) {
  switch (userChoice) {
    case "rock":
      return "rock";
    case "paper":
      return "paper";
    case "scissors":
      return "scissors";
  }
}

function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3);
  switch (randomInt) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function determineWinner(getComputerChoice, playerSelection, userChoice) {
  let computerSelects = getComputerChoice();
  let playerSelects = playerSelection(userChoice);
  if (computerSelects === playerSelects) {
    return 0;
  } else if (computerSelects === "rock" && playerSelects === "scissors") {
    return -1;
  } else if (computerSelects === "rock" && playerSelects === "paper") {
    return 1;
  } else if (computerSelects === "paper" && playerSelects === "rock") {
    return -1;
  } else if (computerSelects === "paper" && playerSelects === "scissors") {
    return 1;
  } else if (computerSelects === "scissors" && playerSelects === "paper") {
    return -1;
  } else if (computerSelects === "scissors" && playerSelects === "rock") {
    return 1;
  }
}

function game(userChoice) {
  // let userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
  const score = document.getElementById("score");
  if (determineWinner(getComputerChoice, playerSelection, userChoice) === 1) {
    playerWins = playerWins + 1;
    score.textContent =
      "Player wins! The score is " + playerWins + " to " + computerWins;
  } else if (
    determineWinner(getComputerChoice, playerSelection, userChoice) === -1
  ) {
    computerWins = computerWins + 1;
    score.textContent =
      "Computer wins! The score is " + playerWins + " to " + computerWins;
  } else {
    score.textContent =
      "Tie Game! The score is " + playerWins + " to " + computerWins;
  }

  if (playerWins === 5) {
    score.textContent = "Player wins!";
  } else if (computerWins === 5) {
    score.textContent = "Computer Wins!";
  }
}
