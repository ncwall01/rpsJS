let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

document.getElementById('rock').onclick = user;
document.getElementById('paper').onclick = user;
document.getElementById('scissors').onclick = user;

function user() {
  var userChoice = this.id;
  document.getElementById("user").innerHTML = "User threw: " + userChoice;
  console.log("User threw: " + userChoice);

  var computerChoice = Math.random();
  if (computerChoice < 0.34) {
    computerChoice = "rock";
  } else if (computerChoice <= 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  document.getElementById("comp").innerHTML = "Computer threw: " + computerChoice;
  console.log("Computer threw: " + computerChoice);

  console.log(compare(userChoice, computerChoice));
}

function compare(choice1, choice2) {
  if (choice1 === choice2) {
    return "The result is a tie!";
  }

  if (choice1 === "rock") {
    if (choice2 === "scissors") {
      win();
      return "rock wins";
    } else {
      lose();
      return "paper wins";
    }
  }

  if (choice1 === "paper") {
    if (choice2 === "rock") {
      win();
      return "paper wins";
    } else {
      lose();
      return "scissors wins";
    }
  }

  if (choice1 === "scissors") {
    if (choice2 === "rock") {
      lose();
      return "rock wins";
    } else {
      win();
      return "scissors wins";
    }
  }
}

function win() {
  userScore++;
  userScore_span.innerHTML = userScore;
}

function lose() {
  compScore++;
  compScore_span.innerHTML = compScore;
}
