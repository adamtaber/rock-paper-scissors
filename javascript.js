const modalOne = document.getElementById("modalOne");
const playAgainOne = document.getElementById("playAgainOne");


let computerRandom = [
    "rock",
    "paper",
    "scissors"
];

function getRandom() {
    return computerRandom[Math.floor(Math.random()*computerRandom.length)];

}

let playerInput;

const buttons = document.querySelectorAll('button.inputBtn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerInput = button.id;
        console.log(playerInput);
        playRound();
        winAnnounce();
    });
});

const restartButtons = document.querySelectorAll('button.playAgain');
restartButtons.forEach((e) => {
    e.addEventListener('click', () => {
        window.location.reload();
    })
})

modalOne.addEventListener('click', function(event) {
    let content = document.getElementById("contentBox");
    if(event.target != content) {
        window.location.reload();
    }
},
);




let computerScore = 0;
let playerScore = 0;

function playRound() {
    const computerSelection = getRandom();
    const playerSelection = playerInput;
    if(computerSelection === playerInput) {
        document.getElementById('results').textContent =`It's a tie!`;
    }else if((playerInput === "rock") && computerSelection === "scissors") {
        ++playerScore;
        document.getElementById('results').textContent =
        `You Win! ${playerInput} beats ${computerSelection}`;
    }else if((playerSelection === "paper") && computerSelection === "rock") {
        ++playerScore;
        document.getElementById('results').textContent =
        `You Win! ${playerInput} beats ${computerSelection}`;    
    }else if ((playerSelection === "scissors") && computerSelection === "paper") {
        ++playerScore;
        document.getElementById('results').textContent =
        `You Win! ${playerInput} beats ${computerSelection}`;    
    }else {
        ++computerScore;
        document.getElementById('results').textContent =
        `You Lose! ${computerSelection} beats ${playerInput}`;
    }
    document.getElementById('playerScore').textContent = `${playerScore}`;
    document.getElementById('computerScore').textContent = `${computerScore}`;
}

function winAnnounce() {
    while(computerScore === 5 || playerScore === 5) {
        if(computerScore === playerScore) {
            document.getElementById('resultsText').textContent = "It's a Tie!";
            announce();
            break;
        }else if(computerScore > playerScore) {
            document.getElementById('resultsText').textContent =
             "You're the overall loser!";
             announce();
             break;
        }else if(playerScore > computerScore) {
            document.getElementById('resultsText').textContent =
             "You're the overall winner!";
             announce();
             break;
        }
        }
    }

function announce() {
    modalOne.style.display = "block";
}



/*buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerInput = button.id;
        console.log(playerInput);
        playRound();
        winAnnounce();
    });
});*/
// player hits r/p/s
// when player hits button, playRound is run
// once computerScore or playerScore hits 5, announce win/loss