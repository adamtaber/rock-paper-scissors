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

function computerPlayTwo() {

    function rngtwo() {
        return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    }
    
    switch (rngtwo()) {
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

function computerPlayThree() {

    function rngthree() {
        return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    }
    
    switch (rngthree()) {
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

function computerPlayFour() {

    function rngfour() {
        return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    }
    
    switch (rngfour()) {
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

function computerPlayFive() {

    function rngfive() {
        return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    }
    
    switch (rngfive()) {
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

let playerSelection = prompt("Please type rock, paper, or scissors in the box below.");
let computerSelection = computerPlay();
let computerSelectionTwo = computerPlayTwo();
let computerSelectionThree = computerPlayThree();
let computerSelectionFour = computerPlayFour();
let computerSelectionFive = computerPlayFive();

function playRound(playerSelection, computerSelection) {
    if ((playerSelection.toLowerCase() === "rock") && computerSelection === "scissors") {
        return 1
    } else if ((playerSelection.toLowerCase()) === "paper" && computerSelection === "rock") {
        return 1
    } else if ((playerSelection.toLowerCase()) === "scissors" && computerSelection === "paper") {
        return 1
    } else if (computerSelection === "rock" && (playerSelection.toLowerCase() === "scissors")) {
        return (-1)
    } else if (computerSelection === "paper" && (playerSelection.toLowerCase() === "rock")) {
        return (-1)
    } else if (computerSelection === "scissors" && (playerSelection.toLowerCase() === "paper")) {
        return (-1)
    } else if (computerSelection === (playerSelection.toLowerCase())) {
        return 0
    } else {
        return "Invalid Response"
    }
}

function playRoundTwo(playerSelection, computerSelectionTwo) {
    if ((playerSelection.toLowerCase() === "rock") && computerSelectionTwo === "scissors") {
        return 1
    } else if ((playerSelection.toLowerCase()) === "paper" && computerSelectionTwo === "rock") {
        return 1
    } else if ((playerSelection.toLowerCase()) === "scissors" && computerSelectionTwo === "paper") {
        return 1
    } else if (computerSelectionTwo === "rock" && (playerSelection.toLowerCase() === "scissors")) {
        return (-1)
    } else if (computerSelectionTwo === "paper" && (playerSelection.toLowerCase() === "rock")) {
        return (-1)
    } else if (computerSelectionTwo === "scissors" && (playerSelection.toLowerCase() === "paper")) {
        return (-1)
    } else if (computerSelectionTwo === (playerSelection.toLowerCase())) {
        return 0
    } else {
        return "Invalid Response"
    }
}

function playRoundThree(playerSelection, computerSelectionThree) {
    if ((playerSelection.toLowerCase() === "rock") && computerSelectionThree === "scissors") {
        return 1
    } else if ((playerSelection.toLowerCase()) === "paper" && computerSelectionThree === "rock") {
        return 1
    } else if ((playerSelection.toLowerCase()) === "scissors" && computerSelectionThree === "paper") {
        return 1
    } else if (computerSelectionThree === "rock" && (playerSelection.toLowerCase() === "scissors")) {
        return (-1)
    } else if (computerSelectionThree === "paper" && (playerSelection.toLowerCase() === "rock")) {
        return (-1)
    } else if (computerSelectionThree === "scissors" && (playerSelection.toLowerCase() === "paper")) {
        return (-1)
    } else if (computerSelectionThree === (playerSelection.toLowerCase())) {
        return 0
    } else {
        return "Invalid Response"
    }
}

function playRoundFour(playerSelection, computerSelectionFour) {
    if ((playerSelection.toLowerCase() === "rock") && computerSelectionFour === "scissors") {
        return 1
    } else if ((playerSelection.toLowerCase()) === "paper" && computerSelectionFour === "rock") {
        return 1
    } else if ((playerSelection.toLowerCase()) === "scissors" && computerSelectionFour === "paper") {
        return 1
    } else if (computerSelectionFour === "rock" && (playerSelection.toLowerCase() === "scissors")) {
        return (-1)
    } else if (computerSelectionFour === "paper" && (playerSelection.toLowerCase() === "rock")) {
        return (-1)
    } else if (computerSelectionFour === "scissors" && (playerSelection.toLowerCase() === "paper")) {
        return (-1)
    } else if (computerSelectionFour === (playerSelection.toLowerCase())) {
        return 0
    } else {
        return "Invalid Response"
    }
}

function playRoundFive(playerSelection, computerSelectionFive) {
    if ((playerSelection.toLowerCase() === "rock") && computerSelectionFive === "scissors") {
        return 1
    } else if ((playerSelection.toLowerCase()) === "paper" && computerSelectionFive === "rock") {
        return 1
    } else if ((playerSelection.toLowerCase()) === "scissors" && computerSelectionFive === "paper") {
        return 1
    } else if (computerSelectionFive === "rock" && (playerSelection.toLowerCase() === "scissors")) {
        return (-1)
    } else if (computerSelectionFive === "paper" && (playerSelection.toLowerCase() === "rock")) {
        return (-1)
    } else if (computerSelectionFive === "scissors" && (playerSelection.toLowerCase() === "paper")) {
        return (-1)
    } else if (computerSelectionFive === (playerSelection.toLowerCase())) {
        return 0
    } else {
        return "Invalid Response"
    }
}

function game() {
    for (let i = 0; i < 6; i++) {
        //First Round
        if((i === 0) && (playRound(playerSelection, computerSelection) === 1) && (playerSelection.toLowerCase() === "rock")) {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        } else if((i === 0) && (playRound(playerSelection, computerSelection) === 1) && (playerSelection.toLowerCase() === "paper")) {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        } else if((i === 0) && (playRound(playerSelection, computerSelection) === 1) && (playerSelection.toLowerCase() === "scissors")) {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        } else if((i === 0) && (playRound(playerSelection, computerSelection) === (-1)) && (playerSelection.toLowerCase() === "rock")) {
            console.log(`You Lose! ${playerSelection} is engulfed by ${computerSelection}`)
        } else if((i === 0) && (playRound(playerSelection, computerSelection) === (-1)) && (playerSelection.toLowerCase() === "paper")) {
            console.log(`You Lose! ${playerSelection} is sliced apart by ${computerSelection}`)
        } else if((i === 0) && (playRound(playerSelection, computerSelection) === (-1)) && (playerSelection.toLowerCase() === "scissors")) {
            console.log(`You Lose! ${playerSelection} are crushed by ${computerSelection}`)
        } else if((i === 0) && (playRound(playerSelection, computerSelection) === 0) && (playerSelection.toLowerCase() === computerSelection)) {
            console.log(`You Tie!`);
        //Second Round
        } else if((i === 1) && (playRound(playerSelection, computerSelectionTwo) === 1) && (playerSelection.toLowerCase() === "rock")) {
            console.log(`You Win! ${playerSelection} beats ${computerSelectionTwo}`)
        } else if((i === 1) && (playRound(playerSelection, computerSelectionTwo) === 1) && (playerSelection.toLowerCase() === "paper")) {
            console.log(`You Win! ${playerSelection} beats ${computerSelectionTwo}`)
        } else if((i === 1) && (playRound(playerSelection, computerSelectionTwo) === 1) && (playerSelection.toLowerCase() === "scissors")) {
            console.log(`You Win! ${playerSelection} beats ${computerSelectionTwo}`)
        } else if((i === 1) && (playRound(playerSelection, computerSelectionTwo) === (-1)) && (playerSelection.toLowerCase() === "rock")) {
            console.log(`You Lose! ${playerSelection} is engulfed by ${computerSelectionTwo}`)
        } else if((i === 1) && (playRound(playerSelection, computerSelectionTwo) === (-1)) && (playerSelection.toLowerCase() === "paper")) {
            console.log(`You Lose! ${playerSelection} is sliced apart by ${computerSelectionTwo}`)
        } else if((i === 1) && (playRound(playerSelection, computerSelectionTwo) === (-1)) && (playerSelection.toLowerCase() === "scissors")) {
            console.log(`You Lose! ${playerSelection} are crushed by ${computerSelectionTwo}`)
        } else if((i === 1) && (playRound(playerSelection, computerSelectionTwo) === 0) && (playerSelection.toLowerCase() === computerSelectionTwo)) {
            console.log(`You Tie!`);
        //Third Round
        } else if((i === 2) && (playRound(playerSelection, computerSelectionThree) === 1) && (playerSelection.toLowerCase() === "rock")) {
            console.log(`You Win! ${playerSelection} beats ${computerSelectionThree}`)
        } else if((i === 2) && (playRound(playerSelection, computerSelectionThree) === 1) && (playerSelection.toLowerCase() === "paper")) {
            console.log(`You Win! ${playerSelection} beats ${computerSelectionThree}`)
        } else if((i === 2) && (playRound(playerSelection, computerSelectionThree) === 1) && (playerSelection.toLowerCase() === "scissors")) {
            console.log(`You Win! ${playerSelection} beats ${computerSelectionThree}`)
        } else if((i === 2) && (playRound(playerSelection, computerSelectionThree) === (-1)) && (playerSelection.toLowerCase() === "rock")) {
            console.log(`You Lose! ${playerSelection} is engulfed by ${computerSelectionThree}`)
        } else if((i === 2) && (playRound(playerSelection, computerSelectionThree) === (-1)) && (playerSelection.toLowerCase() === "paper")) {
            console.log(`You Lose! ${playerSelection} is sliced apart by ${computerSelectionThree}`)
        } else if((i === 2) && (playRound(playerSelection, computerSelectionThree) === (-1)) && (playerSelection.toLowerCase() === "scissors")) {
            console.log(`You Lose! ${playerSelection} are crushed by ${computerSelectionThree}`)
        } else if((i === 2) && (playRound(playerSelection, computerSelectionThree) === 0) && (playerSelection.toLowerCase() === computerSelectionThree)) {
            console.log(`You Tie!`);    
        //Fourth Round
        } else if((i === 3) && (playRound(playerSelection, computerSelectionFour) === 1) && (playerSelection.toLowerCase() === "rock")) {
            console.log(`You Win! ${playerSelection} beats ${computerSelectionFour}`)
        } else if((i === 3) && (playRound(playerSelection, computerSelectionFour) === 1) && (playerSelection.toLowerCase() === "paper")) {
            console.log(`You Win! ${playerSelection} beats ${computerSelectionFour}`)
        } else if((i === 3) && (playRound(playerSelection, computerSelectionFour) === 1) && (playerSelection.toLowerCase() === "scissors")) {
            console.log(`You Win! ${playerSelection} beats ${computerSelectionFour}`)
        } else if((i === 3) && (playRound(playerSelection, computerSelectionFour) === (-1)) && (playerSelection.toLowerCase() === "rock")) {
            console.log(`You Lose! ${playerSelection} is engulfed by ${computerSelectionFour}`)
        } else if((i === 3) && (playRound(playerSelection, computerSelectionFour) === (-1)) && (playerSelection.toLowerCase() === "paper")) {
            console.log(`You Lose! ${playerSelection} is sliced apart by ${computerSelectionFour}`)
        } else if((i === 3) && (playRound(playerSelection, computerSelectionFour) === (-1)) && (playerSelection.toLowerCase() === "scissors")) {
            console.log(`You Lose! ${playerSelection} are crushed by ${computerSelectionFour}`)
        } else if((i === 3) && (playRound(playerSelection, computerSelectionFour) === 0) && (playerSelection.toLowerCase() === computerSelectionFour)) {
            console.log(`You Tie!`);   
        //Fifth Round 
        } else if((i === 4) && (playRound(playerSelection, computerSelectionFive) === 1) && (playerSelection.toLowerCase() === "rock")) {
            console.log(`You Win! ${playerSelection} beats ${computerSelectionFive}`)
        } else if((i === 4) && (playRound(playerSelection, computerSelectionFive) === 1) && (playerSelection.toLowerCase() === "paper")) {
            console.log(`You Win! ${playerSelection} beats ${computerSelectionFive}`)
        } else if((i === 4) && (playRound(playerSelection, computerSelectionFive) === 1) && (playerSelection.toLowerCase() === "scissors")) {
            console.log(`You Win! ${playerSelection} beats ${computerSelectionFive}`)
        } else if((i === 4) && (playRound(playerSelection, computerSelectionFive) === (-1)) && (playerSelection.toLowerCase() === "rock")) {
            console.log(`You Lose! ${playerSelection} is engulfed by ${computerSelectionFive}`)
        } else if((i === 4) && (playRound(playerSelection, computerSelectionFive) === (-1)) && (playerSelection.toLowerCase() === "paper")) {
            console.log(`You Lose! ${playerSelection} is sliced apart by ${computerSelectionFive}`)
        } else if((i === 4) && (playRound(playerSelection, computerSelectionFive) === (-1)) && (playerSelection.toLowerCase() === "scissors")) {
            console.log(`You Lose! ${playerSelection} are crushed by ${computerSelectionFive}`)
        } else if((i === 4) && (playRound(playerSelection, computerSelectionFive) === 0) && (playerSelection.toLowerCase() === computerSelectionFive)) {
            console.log(`You Tie!`);      
        //Overall Score
        } else if((i === 5) && (sum1 > 0)) {
            console.log("You're the overall winner!");
        } else if((i === 5) && (sum1 < 0)) {
            console.log("You're the overall loser!");
        } else if((i === 5) && (sum1 = 0)) {
            console.log("Nobody Won!");
        } else {
            console.log("Something went very wrong");
        }
    }
}

const array1 = [(playRound(playerSelection, computerSelection)),
    (playRoundTwo(playerSelection, computerSelectionTwo)),
    (playRoundThree(playerSelection, computerSelectionThree)),
    (playRoundFour(playerSelection, computerSelectionTwo)),
    (playRoundFive(playerSelection, computerSelectionFive))];

const sum1 = (0 + (array1[0]) + (array1[1]) + (array1[2]) + (array1[3]) + (array1[4]));
const sum2 = (1 + (-1) + (-2));

// if sum of array1 is > 0 you win
// if sum of array1 is = 0 you tie
// if sum of array1 is < 0 you lose


/*let counts = {};
for (let num of array) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;*/


// if win, lose, and tie each have a value
// win = 1
// lose = -1
// tie = 0
// win if x > 0
// tie if x == 0
// lose if x < 0

/*function game() {
    for (let i = 0; i < 6; i++) {
        if(i === 0) {
            console.log(array[0]);
        } else if(i === 1) {
            console.log(array[1]);
        } else if(i === 2) {
            console.log(array[2]);
        } else if(i === 3) {
            console.log(array[3]);
        } else if(i === 4) {
            console.log(array[4]);
        } else {
            console.log("error");
        }
            
    }
}*/