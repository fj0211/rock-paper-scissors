// Starting Variables
//Storing HTMl elements a variable for easy access
let playerScore = 0;
let computerScore = 0;
let playerChoice = "";
let computerChoice = "";
let pCount = document.getElementById('p-count');
let cCount = document.getElementById('c-count');
let result = document.getElementById('result');

function computerSelect() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      computerChoice = "paper";
      break;
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }
}
// when clicking paper 1/3 answers will be provided to the player
function paper() {
  computerSelect();
  switch (computerChoice) {
    case "scissors":
      computerScore++;
      result.innerHTML = "L bozo bahaha";
      break;
    case "paper":
      result.innerHTML = "draw!";
      break;
    case "rock":
      playerScore++;
      result.innerHTML = "you finally won at something in your life!";
      break;
  }
  pCount.innerHTML = playerScore;
  cCount.innerHTML = computerScore;
}

// when clicking scissors 1/3 answers will be provided to the player
function scissors() {
  computerSelect();
  switch (computerChoice) {
    case "rock":
      computerScore++;
      result.innerHTML = "L bozo bahaha";
      break;
    case "paper":
      playerScore++;
      result.innerHTML = "you finally won at something in your life!";
      break;
    case "scissors":
      result.innerHTML = "draw!";
      break;

  }
  pCount.innerHTML = playerScore;
  cCount.innerHTML = computerScore;
}

// when clicking rock 1/3 answers will be provided to the player
function rock() {
  computerSelect();
  switch (computerChoice) {
    case "paper":
      result.innerHTML = "L bozo bahaha";
      computerScore++;
      break;
    case "rock":
      result.innerHTML = "draw!";
      break;
    case "scissors":
      result.innerHTML = "you finally won at something in your life!";
      playerScore++;
      break;
  }
  pCount.innerHTML = playerScore;
  cCount.innerHTML = computerScore;
}

function reset() {
  computerScore = 0;
  playerScore = 0;
  pCount.innerHTML = playerScore;
  cCount.innerHTML = computerScore;
  result.innerHTML = "Results"
}
