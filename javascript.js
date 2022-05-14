// a function named computerPlay that will randomly generate rock, paper, or scissors
// 1) random number generator that will generate 0, 1, or 2
// assign rock, paper, and scissors each a numeric value





function computerPlay() {

    function rng() {
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    }

    switch (rng()) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return null;
    }
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection.toLowerCase() === "rock") && computerSelection === "scissors") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else if ((playerSelection.toLowerCase()) === "paper" && computerSelection === "rock") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else if ((playerSelection.toLowerCase()) === "scissors" && computerSelection === "paper") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else if (computerSelection === "rock" && (playerSelection.toLowerCase() === "scissors")) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    } else if (computerSelection === "paper" && (playerSelection.toLowerCase() === "rock")) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    } else if (computerSelection === "scissors" && (playerSelection.toLowerCase() === "paper")) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    } else if (computerSelection === (playerSelection.toLowerCase())) {
        return "It's a tie!"
    } else {
        return "Invalid Response"
    }
}

let playerSelection = "rock";
let computerSelection = "scissors"; //switch back to computerPlay();

function game() {
    for (let i = 0; i < 5; i++) {
        if((i === 0) && ((playRound(playerSelection, computerSelection)) === `You Win! ${playerSelection} beats ${computerSelection}`)) {
            console.log("You Win!");
        } else {
            console.log(i);
        }
    }
}



// playRound will letl you know if you win or lose based upon your entry
// game() needs to play five rounds, tell you the results of those 5 rounds, and calculate the overall winner
// You win!, You  win!, You lose!, You lose!, You lose!
