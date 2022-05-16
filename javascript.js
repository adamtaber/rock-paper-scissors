let myArray = [
    "rock",
    "paper",
    "scissors"
];

function computerPlay() {
    return myArray[Math.floor(Math.random()*myArray.length)];

}



let computerScore = 0;
let playerScore = 0;
let playerSelection = 'ROCK';


function playRound(playerSelection) {
    const computerSelection = computerPlay();
    prompt("enter rock, paper, or scissors")
    if(computerSelection === (playerSelection.toLowerCase())) {
        console.log(`It's a tie!`);
    }else if((playerSelection.toLowerCase() === "rock") && computerSelection === "scissors") {
        ++playerScore;
        console.log(`You Win! ${playerSelection.toLowerCase()} beats ${computerSelection}`);
    }else if((playerSelection.toLowerCase() === "paper") && computerSelection === "rock") {
        ++playerScore;
        console.log(`You Win! ${playerSelection.toLowerCase()} beats ${computerSelection}`);    
    }else if ((playerSelection.toLowerCase() === "scissors") && computerSelection === "paper") {
        ++playerScore;
        console.log(`You Win! ${playerSelection.toLowerCase()} beats ${computerSelection}`);    
    }else {
        ++computerScore;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`);
    }
}

function game() {
    for (let i = 0; i < 6; i++) {
        if(i===0) {
            playRound(playerSelection);
        }else if(i===1) {
            playRound(playerSelection);
        }else if(i===2) {
            playRound(playerSelection);
        }else if(i===3) {
            playRound(playerSelection);
        }else if(i===4) {
            playRound(playerSelection);
        }else if(i===5) {
            if(playerScore > computerScore) {
                console.log("You're the overall winner!")
            }else if(playerScore < computerScore) {
                console.log("You're the overall loser!")
            }else {
                console.log("Overall, it's a tie!")
            }
        }else {
            console.log("invalid")
        }
    }
}