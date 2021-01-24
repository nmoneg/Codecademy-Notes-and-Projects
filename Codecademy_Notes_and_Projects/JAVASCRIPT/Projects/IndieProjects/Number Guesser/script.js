let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
     return Math.floor(Math.random() * 9);
};

function compareGuesses(userGuess, computerGuess, targetGuess) {
    let user = Math.abs(userGuess - targetGuess);
    let computer = Math.abs(computerGuess - targetGuess);
    
    if (user < computer || user === computer) {
        return true;
    } else {
        return false;
    }

    // console.log(`You guessed ${userGuess}, the computer guessed ${computerGuess}. The target number was ${targetGuess}`)
    // console.log(`The difference between your guess was ${user}, the difference between the computer's was ${computer}`)
}; 

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
};

function advanceRound() {
   currentRoundNumber++; 
};

function alert(userGuess) {
    if (userGuess > 9 || userGuess < 0) {
        return true;
    }
};