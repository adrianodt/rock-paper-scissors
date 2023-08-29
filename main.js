const userChoiceDisplay = document.createElement("h1");
const computerChoiceDisplay = document.createElement("h1");
const resultDisplay = document.createElement("h1");
const computerScore = document.createElement("h2");
const playerScore = document.createElement("h2");
const gameGrid = document.getElementById("game");
gameGrid.append(
  userChoiceDisplay,
  computerChoiceDisplay,
  resultDisplay,
  playerScore,
  computerScore
);

const choices = ["rock", "paper", "scissors"];
let userChoice;
let computerChoice;
var contPlayer = 0;
var contComputer = 0;

const handleClick = (e) => {
  if (contPlayer < 5 && contComputer < 5) {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = "User choice: " + userChoice;
    generateComputerChoice();
    getResult();

    if (contPlayer === 5 || contComputer === 5) {
      // Check if either player has reached 5 wins
      endGame();
    }
  }
};

const endGame = () => {
  if (contPlayer === 5) {
    resultDisplay.innerHTML = "Player Wins the Game!";
  } else {
    resultDisplay.innerHTML = "Computer Wins the Game!";
  }

  // reset the scores here.
  contPlayer = 0;
  contComputer = 0;
  playerScore.innerHTML = "Player score: " + contPlayer;
  computerScore.innerHTML = "Computer score: " + contComputer;

  // Disable the click event on the choices buttons to prevent further gameplay.
  const choiceButtons = document.querySelectorAll("button");
  choiceButtons.forEach((button) => {
    button.removeEventListener("click", handleClick);
  });

  playAgain();
};

const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoice = randomChoice;
  computerChoiceDisplay.innerHTML = "Computer choice: " + computerChoice;
};

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement("button");
  button.id = choices[i];
  button.innerHTML = choices[i];
  button.addEventListener("click", handleClick);
  gameGrid.appendChild(button);
}

const getResult = () => {
  switch (userChoice + computerChoice) {
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      contPlayer++;
      resultDisplay.innerHTML = "YOU WIN!";
      playerScore.innerHTML = "Player score: " + contPlayer;
      computerScore.innerHTML = "Computer score: " + contComputer;
      break;
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      contComputer++;
      resultDisplay.innerHTML = "YOU LOSE!";
      playerScore.innerHTML = "Player score: " + contPlayer;
      computerScore.innerHTML = "Computer score: " + contComputer;
      break;
    case "paperpaper":
    case "scissorsscissors":
    case "rockrock":
      resultDisplay.innerHTML = "ITS A DRAW!";
      playerScore.innerHTML = "Player score: " + contPlayer;
      computerScore.innerHTML = "Computer score: " + contComputer;
      break;
  }
};

const playAgain = () => {
  const playAgainButton = document.createElement("button");
  playAgainButton.innerHTML = "Play Again";
  playAgainButton.addEventListener("click", () => {
    contPlayer = 0;
    contComputer = 0;
    playerScore.innerHTML = "Player score: " + contPlayer;
    computerScore.innerHTML = "Computer score: " + contComputer;
    resultDisplay.innerHTML = "";
    userChoiceDisplay.innerHTML = "";
    computerChoiceDisplay.innerHTML = "";

    // Re-enable the click event on the choices buttons.
    const choiceButtons = document.querySelectorAll("button");
    choiceButtons.forEach((button) => {
      button.addEventListener("click", handleClick);
    });

    playAgainButton.remove();
  });

  gameGrid.appendChild(playAgainButton);
};