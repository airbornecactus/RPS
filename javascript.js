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

function game() {
  let computerWins = 0;
  let playerWins = 0;

  for (let i = 0; i < 5; i++) {
    let userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();

    if (determineWinner(getComputerChoice, playerSelection, userChoice) === 1) {
      playerWins = playerWins + 1;
      console.log(
        "Player wins! The score is " + playerWins + " to " + computerWins
      );
    } else if (
      determineWinner(getComputerChoice, playerSelection, userChoice) === -1
    ) {
      computerWins = computerWins + 1;
      console.log(
        "Computer wins! The score is " + playerWins + " to " + computerWins
      );
    } else {
      console.log(
        "Tie Game! The score is " + playerWins + " to " + computerWins
      );
    }
  }
}

game();
