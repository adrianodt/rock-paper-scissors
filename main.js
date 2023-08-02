let options = ['rock', 'paper', 'scissors'];


function getComputerChoice() {
  let choice = options[Math.floor(Math.random() * 3)];
  console.log('Computer plays: ' + choice);
  return choice;
}

function checkWinner(playerSelection, computerSelection) {
  let roundResult = playerSelection + computerSelection;

  switch (roundResult) {
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      return 'Tie';
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      return 'Player';
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      return 'Computer';
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);

  if (result == 'Tie') {
    return "It's a tie!"
  } else if (result == 'Player') {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `Computer wins! ${computerSelection} beats ${playerSelection}`;
  }
}

function getPlayerChoice() {
  let validatedInput = false;

  while (validatedInput == false) {
    const choice = prompt('Rock | Paper | Scissors');
    
    if (choice == null) {
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    console.log('You play: ' + choiceInLower);

    if (options.includes(choiceInLower)) {
      validatedInput = true;
      return choiceInLower;
    }
  }
}

function game() {

  let scorePlayer = 0;
  let scoreComputer = 0;
  console.log('Welcome');

  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    
    if(checkWinner(playerSelection, computerSelection) == 'Player'){
      scorePlayer++;

    } else if(checkWinner(playerSelection, computerSelection) == 'Computer'){
      scoreComputer++;
    }
    console.log('Your score: ' + scorePlayer);
    console.log('Computer score: ' + scoreComputer);
    console.log('----------------');
  };
  console.log('Game over');
  
  if (scorePlayer > scoreComputer) {
    console.log('Player wins the match!');
  } else console.log('Computer wins the match!');
  console.log('----------------');
}

game();
