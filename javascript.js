let computerRandom = [
    "rock",
    "paper",
    "scissors"
];

function getRandom() {
    return computerRandom[Math.floor(Math.random()*computerRandom.length)];

}

let playerInput;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerInput = button.id;
        console.log(playerInput);
        playRound();
        winAnnounce();
    });
});


let computerScore = 0;
let playerScore = 0;

function playRound() {
    const computerSelection = getRandom();
    const playerSelection = playerInput;
    if(computerSelection === playerInput) {
        alert(`It's a tie!`);
    }else if((playerInput === "rock") && computerSelection === "scissors") {
        ++playerScore;
        alert(`You Win! ${playerInput} beats ${computerSelection}`);
    }else if((playerSelection === "paper") && computerSelection === "rock") {
        ++playerScore;
        alert(`You Win! ${playerInput} beats ${computerSelection}`);    
    }else if ((playerSelection === "scissors") && computerSelection === "paper") {
        ++playerScore;
        alert(`You Win! ${playerInput} beats ${computerSelection}`);    
    }else {
        ++computerScore;
        alert(`You Lose! ${computerSelection} beats ${playerInput}`);
    }
}

function winAnnounce() {
    while(computerScore === 5 || playerScore === 5) {
        if(computerScore === playerScore) {
            document.getElementById('results').textContent = 
            "GAME OVER: IT'S A TIE";
            computerScore = 0;
            playerScore = 0;
            break;
        }else if(computerScore > playerScore) {
            document.getElementById('results').textContent =
            "GAME OVER: YOU LOSE";
            computerScore = 0;
            playerScore = 0;
            break;
        }else if(playerScore > computerScore) {
            document.getElementById('results').textContent =
            "GAME OVER: YOU WIN!";
            computerScore = 0;
            playerScore = 0;
            break;
        }
    }
}

// player hits r/p/s
// when player hits button, playRound is run
// once computerScore or playerScore hits 5, announce win/loss