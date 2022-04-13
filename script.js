// Starting Variables
//Storing HTMl elements a variable for easy access
let pScoreboard = document.querySelector('.p-count');
let cScoreboard = document.querySelector('.c-count');
let roundResult = document.querySelector('.result');
let computerChoiceSpan = document.querySelector('.computerChoice');
let userChoiceSpan = document.querySelector('.userChoice');
let winnerPannel = document.querySelector('.youwon');

//setting score variables for player & computer to track score
let playerScore = 0;
let computerScore = 0;
let computerChoice;
let playerChoice;
const gameOptions = ["rock", "paper", "scissor"];
// function will allow the computer to randomly generate a choice for it to use by using a random number 1-3 in order to store selections//

function computerChoose() {
  const randomNum = Math.floor(Math.random() * 3);
    computerChoice = gameOptions[randomNum];
    computerChoiceSpan.innerHTML = computerChoice;
}

function userChoice(choice) {
    playerChoice = gameOptions[choice];
    userChoiceSpan.innerHTML = playerChoice;
    computerChoose();
    game(playerChoice,computerChoice);
}

function game(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        won("tie");
        return;
    }

    if (playerChoice == "rock" && computerChoice == "paper")
        won("computer");
    else if (playerChoice == "rock" && computerChoice == "scissor")
        won("player");
    else if (playerChoice == "paper" && computerChoice == "rock")
        won("player");
    else if (playerChoice == "paper" && computerChoice == "scissor")
        won("computer");
    else if (playerChoice == "scissor" && computerChoice == "rock")
        won("computer");
    else if (playerChoice == "scissor" && computerChoice == "paper")
        won("player");
    else
        alert("Wrong inputs")
}

function won(youwon) {
    if (youwon == "player") {
        roundResult.innerHTML = "wow you beat a computer holy you're insane";
        playerScore = playerScore + 1;
        pScoreboard.innerHTML = playerScore;
        winnerPannel.src = "https://rockymountevents.com/wp-content/uploads/2018/09/birthday_celebration.jpg";
    }
    else if (youwon == "computer") {
        roundResult.innerHTML = "you suck, better luck next time";
        computerScore = computerScore + 1;
        cScoreboard.innerHTML = computerScore;
        winnerPannel.src = "https://image.shutterstock.com/z/stock-vector-letter-l-button-53071078.jpg";
    }
    else {
        roundResult.innerHTML = "Draw!";
        winnerPannel.src = "https://dictionary.cambridge.org/us/images/thumb/tie_noun_002_38061.jpg?version=5.0.230";
    }
    winnerPannel.style.display = "block";
}

function resetGame() {
    roundResult.innerHTML = "";
    playerScore = 0;
    pScoreboard.innerHTML = playerScore;
    computerScore = 0;
    cScoreboard.innerHTML = computerScore;
    userChoiceSpan.innerHTML = "";
    computerChoiceSpan.innerHTML = "";
    winnerPannel.style.display = "none";
}
