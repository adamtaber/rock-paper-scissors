function myFunc() {
    let playerValue = document.getElementById("uniqueID").value;
    console.log(playerValue);
    


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

let computerSelection = computerPlay();
let computerSelectionTwo = computerPlayTwo();
let computerSelectionThree = computerPlayThree();
let computerSelectionFour = computerPlayFour();
let computerSelectionFive = computerPlayFive();

function playRound(playerValue, computerSelection) {
    if ((playerValue.toLowerCase() === "rock") && computerSelection === "scissors") {
        return 1
    } else if ((playerValue.toLowerCase()) === "paper" && computerSelection === "rock") {
        return 1
    } else if ((playerValue.toLowerCase()) === "scissors" && computerSelection === "paper") {
        return 1
    } else if (computerSelection === "rock" && (playerValue.toLowerCase() === "scissors")) {
        return (-1)
    } else if (computerSelection === "paper" && (playerValue.toLowerCase() === "rock")) {
        return (-1)
    } else if (computerSelection === "scissors" && (playerValue.toLowerCase() === "paper")) {
        return (-1)
    } else if (computerSelection === (playerValue.toLowerCase())) {
        return 0
    } else {
        return "Invalid Response"
    }
}

function playRoundTwo(playerValue, computerSelectionTwo) {
    if ((playerValue.toLowerCase() === "rock") && computerSelectionTwo === "scissors") {
        return 1
    } else if ((playerValue.toLowerCase()) === "paper" && computerSelectionTwo === "rock") {
        return 1
    } else if ((playerValue.toLowerCase()) === "scissors" && computerSelectionTwo === "paper") {
        return 1
    } else if (computerSelectionTwo === "rock" && (playerValue.toLowerCase() === "scissors")) {
        return (-1)
    } else if (computerSelectionTwo === "paper" && (playerValue.toLowerCase() === "rock")) {
        return (-1)
    } else if (computerSelectionTwo === "scissors" && (playerValue.toLowerCase() === "paper")) {
        return (-1)
    } else if (computerSelectionTwo === (playerValue.toLowerCase())) {
        return 0
    } else {
        return "Invalid Response"
    }
}

function playRoundThree(playerValue, computerSelectionThree) {
    if ((playerValue.toLowerCase() === "rock") && computerSelectionThree === "scissors") {
        return 1
    } else if ((playerValue.toLowerCase()) === "paper" && computerSelectionThree === "rock") {
        return 1
    } else if ((playerValue.toLowerCase()) === "scissors" && computerSelectionThree === "paper") {
        return 1
    } else if (computerSelectionThree === "rock" && (playerValue.toLowerCase() === "scissors")) {
        return (-1)
    } else if (computerSelectionThree === "paper" && (playerValue.toLowerCase() === "rock")) {
        return (-1)
    } else if (computerSelectionThree === "scissors" && (playerValue.toLowerCase() === "paper")) {
        return (-1)
    } else if (computerSelectionThree === (playerValue.toLowerCase())) {
        return 0
    } else {
        return "Invalid Response"
    }
}

function playRoundFour(playerValue, computerSelectionFour) {
    if ((playerValue.toLowerCase() === "rock") && computerSelectionFour === "scissors") {
        return 1
    } else if ((playerValue.toLowerCase()) === "paper" && computerSelectionFour === "rock") {
        return 1
    } else if ((playerValue.toLowerCase()) === "scissors" && computerSelectionFour === "paper") {
        return 1
    } else if (computerSelectionFour === "rock" && (playerValue.toLowerCase() === "scissors")) {
        return (-1)
    } else if (computerSelectionFour === "paper" && (playerValue.toLowerCase() === "rock")) {
        return (-1)
    } else if (computerSelectionFour === "scissors" && (playerValue.toLowerCase() === "paper")) {
        return (-1)
    } else if (computerSelectionFour === (playerValue.toLowerCase())) {
        return 0
    } else {
        return "Invalid Response"
    }
}

function playRoundFive(playerValue, computerSelectionFive) {
    if ((playerValue.toLowerCase() === "rock") && computerSelectionFive === "scissors") {
        return 1
    } else if ((playerValue.toLowerCase()) === "paper" && computerSelectionFive === "rock") {
        return 1
    } else if ((playerValue.toLowerCase()) === "scissors" && computerSelectionFive === "paper") {
        return 1
    } else if (computerSelectionFive === "rock" && (playerValue.toLowerCase() === "scissors")) {
        return (-1)
    } else if (computerSelectionFive === "paper" && (playerValue.toLowerCase() === "rock")) {
        return (-1)
    } else if (computerSelectionFive === "scissors" && (playerValue.toLowerCase() === "paper")) {
        return (-1)
    } else if (computerSelectionFive === (playerValue.toLowerCase())) {
        return 0
    } else {
        return "Invalid Response"
    }
}

let lineOne = document.querySelector(".lineOne");
let lineTwo = document.querySelector(".lineTwo");
let lineThree = document.querySelector(".lineThree");
let lineFour = document.querySelector(".lineFour");
let lineFive = document.querySelector(".lineFive");
let lineSix = document.querySelector(".lineSix");


function game() {
    for (let i = 0; i < 6; i++) {
        //First Round
        if((i === 0) && (playRound(playerValue, computerSelection) === 1) && (playerValue.toLowerCase() === "rock")) {
            lineOne.innerText = (`You Win! ${playerValue} beats ${computerSelection}`)
        } else if((i === 0) && (playRound(playerValue, computerSelection) === 1) && (playerValue.toLowerCase() === "paper")) {
            lineOne.innerText = (`You Win! ${playerValue} beats ${computerSelection}`)
        } else if((i === 0) && (playRound(playerValue, computerSelection) === 1) && (playerValue.toLowerCase() === "scissors")) {
            lineOne.innerText = (`You Win! ${playerValue} beats ${computerSelection}`)
        } else if((i === 0) && (playRound(playerValue, computerSelection) === (-1)) && (playerValue.toLowerCase() === "rock")) {
            lineOne.innerText = (`You Lose! ${playerValue} is engulfed by ${computerSelection}`)
        } else if((i === 0) && (playRound(playerValue, computerSelection) === (-1)) && (playerValue.toLowerCase() === "paper")) {
            lineOne.innerText = (`You Lose! ${playerValue} is sliced apart by ${computerSelection}`)
        } else if((i === 0) && (playRound(playerValue, computerSelection) === (-1)) && (playerValue.toLowerCase() === "scissors")) {
            lineOne.innerText = (`You Lose! ${playerValue} are crushed by ${computerSelection}`)
        } else if((i === 0) && (playRound(playerValue, computerSelection) === 0) && (playerValue.toLowerCase() === computerSelection)) {
            lineOne.innerText = (`You Tie!`);
        //Second Round
        } else if((i === 1) && (playRound(playerValue, computerSelectionTwo) === 1) && (playerValue.toLowerCase() === "rock")) {
            lineTwo.innerText = (`You Win! ${playerValue} beats ${computerSelectionTwo}`)
        } else if((i === 1) && (playRound(playerValue, computerSelectionTwo) === 1) && (playerValue.toLowerCase() === "paper")) {
            lineTwo.innerText = (`You Win! ${playerValue} beats ${computerSelectionTwo}`)
        } else if((i === 1) && (playRound(playerValue, computerSelectionTwo) === 1) && (playerValue.toLowerCase() === "scissors")) {
            lineTwo.innerText = (`You Win! ${playerValue} beats ${computerSelectionTwo}`)
        } else if((i === 1) && (playRound(playerValue, computerSelectionTwo) === (-1)) && (playerValue.toLowerCase() === "rock")) {
            lineTwo.innerText = (`You Lose! ${playerValue} is engulfed by ${computerSelectionTwo}`)
        } else if((i === 1) && (playRound(playerValue, computerSelectionTwo) === (-1)) && (playerValue.toLowerCase() === "paper")) {
            lineTwo.innerText = (`You Lose! ${playerValue} is sliced apart by ${computerSelectionTwo}`)
        } else if((i === 1) && (playRound(playerValue, computerSelectionTwo) === (-1)) && (playerValue.toLowerCase() === "scissors")) {
            lineTwo.innerText = (`You Lose! ${playerValue} are crushed by ${computerSelectionTwo}`)
        } else if((i === 1) && (playRound(playerValue, computerSelectionTwo) === 0) && (playerValue.toLowerCase() === computerSelectionTwo)) {
            lineTwo.innerText = (`You Tie!`);
        //Third Round
        } else if((i === 2) && (playRound(playerValue, computerSelectionThree) === 1) && (playerValue.toLowerCase() === "rock")) {
            lineThree.innerText = (`You Win! ${playerValue} beats ${computerSelectionThree}`)
        } else if((i === 2) && (playRound(playerValue, computerSelectionThree) === 1) && (playerValue.toLowerCase() === "paper")) {
            lineThree.innerText = (`You Win! ${playerValue} beats ${computerSelectionThree}`)
        } else if((i === 2) && (playRound(playerValue, computerSelectionThree) === 1) && (playerValue.toLowerCase() === "scissors")) {
            lineThree.innerText = (`You Win! ${playerValue} beats ${computerSelectionThree}`)
        } else if((i === 2) && (playRound(playerValue, computerSelectionThree) === (-1)) && (playerValue.toLowerCase() === "rock")) {
            lineThree.innerText = (`You Lose! ${playerValue} is engulfed by ${computerSelectionThree}`)
        } else if((i === 2) && (playRound(playerValue, computerSelectionThree) === (-1)) && (playerValue.toLowerCase() === "paper")) {
            lineThree.innerText = (`You Lose! ${playerValue} is sliced apart by ${computerSelectionThree}`)
        } else if((i === 2) && (playRound(playerValue, computerSelectionThree) === (-1)) && (playerValue.toLowerCase() === "scissors")) {
            lineThree.innerText = (`You Lose! ${playerValue} are crushed by ${computerSelectionThree}`)
        } else if((i === 2) && (playRound(playerValue, computerSelectionThree) === 0) && (playerValue.toLowerCase() === computerSelectionThree)) {
            lineThree.innerText = (`You Tie!`);    
        //Fourth Round
        } else if((i === 3) && (playRound(playerValue, computerSelectionFour) === 1) && (playerValue.toLowerCase() === "rock")) {
            lineFour.innerText = (`You Win! ${playerValue} beats ${computerSelectionFour}`)
        } else if((i === 3) && (playRound(playerValue, computerSelectionFour) === 1) && (playerValue.toLowerCase() === "paper")) {
            lineFour.innerText = (`You Win! ${playerValue} beats ${computerSelectionFour}`)
        } else if((i === 3) && (playRound(playerValue, computerSelectionFour) === 1) && (playerValue.toLowerCase() === "scissors")) {
            lineFour.innerText = (`You Win! ${playerValue} beats ${computerSelectionFour}`)
        } else if((i === 3) && (playRound(playerValue, computerSelectionFour) === (-1)) && (playerValue.toLowerCase() === "rock")) {
            lineFour.innerText = (`You Lose! ${playerValue} is engulfed by ${computerSelectionFour}`)
        } else if((i === 3) && (playRound(playerValue, computerSelectionFour) === (-1)) && (playerValue.toLowerCase() === "paper")) {
            lineFour.innerText = (`You Lose! ${playerValue} is sliced apart by ${computerSelectionFour}`)
        } else if((i === 3) && (playRound(playerValue, computerSelectionFour) === (-1)) && (playerValue.toLowerCase() === "scissors")) {
            lineFour.innerText = (`You Lose! ${playerValue} are crushed by ${computerSelectionFour}`)
        } else if((i === 3) && (playRound(playerValue, computerSelectionFour) === 0) && (playerValue.toLowerCase() === computerSelectionFour)) {
            lineFour.innerText = (`You Tie!`);   
        //Fifth Round 
        } else if((i === 4) && (playRound(playerValue, computerSelectionFive) === 1) && (playerValue.toLowerCase() === "rock")) {
            lineFive.innerText = (`You Win! ${playerValue} beats ${computerSelectionFive}`)
        } else if((i === 4) && (playRound(playerValue, computerSelectionFive) === 1) && (playerValue.toLowerCase() === "paper")) {
            lineFive.innerText =(`You Win! ${playerValue} beats ${computerSelectionFive}`)
        } else if((i === 4) && (playRound(playerValue, computerSelectionFive) === 1) && (playerValue.toLowerCase() === "scissors")) {
            lineFive.innerText =(`You Win! ${playerValue} beats ${computerSelectionFive}`)
        } else if((i === 4) && (playRound(playerValue, computerSelectionFive) === (-1)) && (playerValue.toLowerCase() === "rock")) {
            lineFive.innerText =(`You Lose! ${playerValue} is engulfed by ${computerSelectionFive}`)
        } else if((i === 4) && (playRound(playerValue, computerSelectionFive) === (-1)) && (playerValue.toLowerCase() === "paper")) {
            lineFive.innerText =(`You Lose! ${playerValue} is sliced apart by ${computerSelectionFive}`)
        } else if((i === 4) && (playRound(playerValue, computerSelectionFive) === (-1)) && (playerValue.toLowerCase() === "scissors")) {
            lineFive.innerText =(`You Lose! ${playerValue} are crushed by ${computerSelectionFive}`)
        } else if((i === 4) && (playRound(playerValue, computerSelectionFive) === 0) && (playerValue.toLowerCase() === computerSelectionFive)) {
            lineFive.innerText =(`You Tie!`);      
        //Overall Score
        } else if((i === 5) && (sum1 > 0)) {
            lineSix.innerText = ("You're the overall winner!");
        } else if((i === 5) && (sum1 < 0)) {
            lineSix.innerText = ("You're the overall loser!");
        } else if((i === 5) && (sum1 = 0)) {
            lineSix.innerText = ("Nobody Won!");
        } else {
            lineSix.innerText = ("Something went very wrong");
        }
    }
}

const array1 = [(playRound(playerValue, computerSelection)),
    (playRoundTwo(playerValue, computerSelectionTwo)),
    (playRoundThree(playerValue, computerSelectionThree)),
    (playRoundFour(playerValue, computerSelectionTwo)),
    (playRoundFive(playerValue, computerSelectionFive))];

const sum1 = (0 + (array1[0]) + (array1[1]) + (array1[2]) + (array1[3]) + (array1[4]));
const sum2 = (1 + (-1) + (-2));

console.log(game())
}









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