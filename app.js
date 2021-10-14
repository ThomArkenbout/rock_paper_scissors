//Computer random rock, paper or scissors
function computerPlay() {
    const number = getRandomNumber();
    if (number == 1) {
        return "Rock";
    } else if (number == 2) {
        return "Paper";
    } else {
        return "Scissor"
    }
}

//number generator
function getRandomNumber() {
    return Math.ceil(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            const lose = "You lose! Paper beats Rock";
            return lose;
        } else if (computerSelection == "Rock") {
            const tie = "The game is a tie!"
            return tie;
        } else {
            const win = "You win! Rock beats Scissors"
            return win;
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Scissor") {
            const lose = "You lose! Scissor beats Paper";
            return lose;
        } else if (computerSelection == "Paper") {
            const tie = "The game is a tie!"
            return tie;
        } else {
            const win = "You win! Paper beats Rock"
            return win;
        }
    } else {
        if (computerSelection == "Rock") {
            const lose = "You lose! Rock beats Scissor";
            return lose;
        } else if (computerSelection == "Scissor") {
            const tie = "The game is a tie!"
            return tie;
        } else {
            const win = "You win! Paper beats Scissor"
            return win;
        }
    }
}

const playerSelection = "Paper";
const computerSelection = computerPlay();

console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));