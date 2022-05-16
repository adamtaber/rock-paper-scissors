let gameStart = prompt("Do you want to play a game?");


let computerRandom = [
    "rock",
    "paper",
    "scissors"
];

function getRandom() {
    return computerRandom[Math.floor(Math.random()*computerRandom.length)];

}

function getPrompt() {
    let playerInput = prompt("enter rock, paper, or scissors");
    return playerInput.toLowerCase();
}


let computerScore = 0;
let playerScore = 0;

function playRound() {
    const computerSelection = getRandom();
    const playerSelection = getPrompt();
    if(computerSelection === playerSelection) {
        alert(`It's a tie!`);
    }else if((playerSelection === "rock") && computerSelection === "scissors") {
        ++playerScore;
        alert(`You Win! ${playerSelection} beats ${computerSelection}`);
    }else if((playerSelection === "paper") && computerSelection === "rock") {
        ++playerScore;
        alert(`You Win! ${playerSelection} beats ${computerSelection}`);    
    }else if ((playerSelection === "scissors") && computerSelection === "paper") {
        ++playerScore;
        alert(`You Win! ${playerSelection} beats ${computerSelection}`);    
    }else {
        ++computerScore;
        alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
}

function playGame() {
    for (let i = 0; i < 6; i++) {
        if(i===0) {
            playRound();
        }else if(i===1) {
            playRound();
        }else if(i===2) {
            playRound();
        }else if(i===3) {
            playRound();
        }else if(i===4) {
            playRound();
        }else if(i===5) {
            if(playerScore > computerScore) {
                alert("You're the overall winner!")
            }else if(playerScore < computerScore) {
                alert("You're the overall loser!")
            }else {
                alert("Overall, it's a tie!")
            }
        }else {
            alert("invalid")
        }
    }
}

if(gameStart = (0 || 1)) {
    playGame();
}