
function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i <5; i++ ) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice().toLowerCase();
        const roundResult = playRound(playerSelection, computerSelection);

    if ( roundResult.includes('win')) {
        playerScore++;
    }   else if (roundResult.includes("lose")) {
        computerScore++;
    }
    
    console.log(`Round ${i + 1}: ${roundResult}`);
}
    
console.log("Game Over!");

if (playerScore > computerScore) {
    console.log("Congatulations! You win the game!");
  } else if (playerScore < computerScore) {
    console.log("Sorry! You lose the game!");
  } else {
    console.log("It's a tie! The game ended in a draw.");
  }
}

function getPlayerChoice() {
    let playerSelection = prompt("Enter your choice: Rock, Paper or Scissors").toLowerCase();

    while (!["rock", "paper", "scissors"].includes(playerSelection)){
        playerSelection = prompt("Invlaid choice! Please enter Rock, Paper or Scissors").toLowerCase();
    }

    return playerSelection;
}
function getComputerChoice(){
    const choices = ['Rock','Paper','Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You lose " + computerSelection + " beats " + playerSelection;
    }
}
game();
  
