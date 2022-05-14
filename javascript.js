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

let playerSelection = "rock";
let computerSelection = computerPlay();
let computerSelectionTwo = computerPlayTwo();
let computerSelectionThree = computerPlayThree();
let computerSelectionFour = computerPlayFour();
let computerSelectionFive = computerPlayFive();

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

function playRoundTwo(playerSelection, computerSelectionTwo) {
    if ((playerSelection.toLowerCase() === "rock") && computerSelectionTwo === "scissors") {
        return `You Win! ${playerSelection} beats ${computerSelectionTwo}`
    } else if ((playerSelection.toLowerCase()) === "paper" && computerSelectionTwo === "rock") {
        return `You Win! ${playerSelection} beats ${computerSelectionTwo}`
    } else if ((playerSelection.toLowerCase()) === "scissors" && computerSelectionTwo === "paper") {
        return `You Win! ${playerSelection} beats ${computerSelectionTwo}`
    } else if (computerSelectionTwo === "rock" && (playerSelection.toLowerCase() === "scissors")) {
        return `You Lose! ${computerSelectionTwo} beats ${playerSelection}`
    } else if (computerSelectionTwo === "paper" && (playerSelection.toLowerCase() === "rock")) {
        return `You Lose! ${computerSelectionTwo} beats ${playerSelection}`
    } else if (computerSelectionTwo === "scissors" && (playerSelection.toLowerCase() === "paper")) {
        return `You Lose! ${computerSelectionTwo} beats ${playerSelection}`
    } else if (computerSelectionTwo === (playerSelection.toLowerCase())) {
        return "It's a tie!"
    } else {
        return "Invalid Response"
    }
}

function playRoundThree(playerSelection, computerSelectionThree) {
    if ((playerSelection.toLowerCase() === "rock") && computerSelectionThree === "scissors") {
        return `You Win! ${playerSelection} beats ${computerSelectionThree}`
    } else if ((playerSelection.toLowerCase()) === "paper" && computerSelectionThree === "rock") {
        return `You Win! ${playerSelection} beats ${computerSelectionThree}`
    } else if ((playerSelection.toLowerCase()) === "scissors" && computerSelectionThree === "paper") {
        return `You Win! ${playerSelection} beats ${computerSelectionThree}`
    } else if (computerSelectionThree === "rock" && (playerSelection.toLowerCase() === "scissors")) {
        return `You Lose! ${computerSelectionThree} beats ${playerSelection}`
    } else if (computerSelectionThree === "paper" && (playerSelection.toLowerCase() === "rock")) {
        return `You Lose! ${computerSelectionThree} beats ${playerSelection}`
    } else if (computerSelectionThree === "scissors" && (playerSelection.toLowerCase() === "paper")) {
        return `You Lose! ${computerSelectionThree} beats ${playerSelection}`
    } else if (computerSelectionThree === (playerSelection.toLowerCase())) {
        return "It's a tie!"
    } else {
        return "Invalid Response"
    }
}

function playRoundFour(playerSelection, computerSelectionFour) {
    if ((playerSelection.toLowerCase() === "rock") && computerSelectionFour === "scissors") {
        return `You Win! ${playerSelection} beats ${computerSelectionFour}`
    } else if ((playerSelection.toLowerCase()) === "paper" && computerSelectionFour === "rock") {
        return `You Win! ${playerSelection} beats ${computerSelectionFour}`
    } else if ((playerSelection.toLowerCase()) === "scissors" && computerSelectionFour === "paper") {
        return `You Win! ${playerSelection} beats ${computerSelectionFour}`
    } else if (computerSelectionFour === "rock" && (playerSelection.toLowerCase() === "scissors")) {
        return `You Lose! ${computerSelectionFour} beats ${playerSelection}`
    } else if (computerSelectionFour === "paper" && (playerSelection.toLowerCase() === "rock")) {
        return `You Lose! ${computerSelectionFour} beats ${playerSelection}`
    } else if (computerSelectionFour === "scissors" && (playerSelection.toLowerCase() === "paper")) {
        return `You Lose! ${computerSelectionFour} beats ${playerSelection}`
    } else if (computerSelectionFour === (playerSelection.toLowerCase())) {
        return "It's a tie!"
    } else {
        return "Invalid Response"
    }
}

function playRoundFive(playerSelection, computerSelectionFive) {
    if ((playerSelection.toLowerCase() === "rock") && computerSelectionFive === "scissors") {
        return `You Win! ${playerSelection} beats ${computerSelectionFive}`
    } else if ((playerSelection.toLowerCase()) === "paper" && computerSelectionFive === "rock") {
        return `You Win! ${playerSelection} beats ${computerSelectionFive}`
    } else if ((playerSelection.toLowerCase()) === "scissors" && computerSelectionFive === "paper") {
        return `You Win! ${playerSelection} beats ${computerSelectionFive}`
    } else if (computerSelectionFive === "rock" && (playerSelection.toLowerCase() === "scissors")) {
        return `You Lose! ${computerSelectionFive} beats ${playerSelection}`
    } else if (computerSelectionFive === "paper" && (playerSelection.toLowerCase() === "rock")) {
        return `You Lose! ${computerSelectionFive} beats ${playerSelection}`
    } else if (computerSelectionFive === "scissors" && (playerSelection.toLowerCase() === "paper")) {
        return `You Lose! ${computerSelectionFive} beats ${playerSelection}`
    } else if (computerSelectionFive === (playerSelection.toLowerCase())) {
        return "It's a tie!"
    } else {
        return "Invalid Response"
    }
}

let roundOne = playRound(playerSelection, computerSelection);
let roundTwo = playRoundTwo(playerSelection, computerSelectionTwo);
let roundThree = playRoundThree(playerSelection, computerSelectionThree);
let roundFour = playRoundFour(playerSelection, computerSelectionFour);
let roundFive = playRoundFive(playerSelection, computerSelectionFive);
let winOne = `You Win! ${playerSelection} beats ${computerSelection}`;
let winTwo = `You Win! ${playerSelection} beats ${computerSelectionTwo}`;
let winThree = `You Win! ${playerSelection} beats ${computerSelectionThree}`;
let winFour = `You Win! ${playerSelection} beats ${computerSelectionFour}`;
let winFive = `You Win! ${playerSelection} beats ${computerSelectionFive}`;
let loseOne = `You Lose! ${computerSelection} beats ${playerSelection}`;
let loseTwo = `You Lose! ${computerSelectionTwo} beats ${playerSelection}`;
let loseThree = `You Lose! ${computerSelectionThree} beats ${playerSelection}`;
let loseFour = `You Lose! ${computerSelectionFour} beats ${playerSelection}`;
let loseFive = `You Lose! ${computerSelectionFive} beats ${playerSelection}`;
let tie = "It's a tie!";




function game() {
    for (let i = 0; i < 6; i++) {
       if(i === 0 && roundOne === winOne) {
           console.log("You Win Round One!");
       } else if(i === 0 && roundOne === loseOne) {
           console.log("You Lose Round One!");
       } else if(i === 0 && roundOne === tie) {
           console.log("It's a Tie!");
       } else if(i === 0) {
           console.log("Invalid Response");
       } else if(i === 1 && roundTwo === winTwo) {
           console.log("You Win Round Two!");
       } else if(i === 1 && roundTwo === loseTwo) {
           console.log("You Lose Round Two!");
       } else if(i === 1 && roundTwo === tie) {
           console.log("It's a Tie!");
       } else if(i === 1) {
           console.log("Invalid Response");
       } else if(i === 2 && roundThree === winThree) {
           console.log("You Win Round Two!");
       } else if(i === 2 && roundThree === loseThree) {
           console.log("You Lose Round Two!");
       } else if(i === 2 && roundThree === tie) {
           console.log("It's a Tie!");
       } else if(i === 2) {
           console.log("Invalid Response");
       } else if(i === 3 && roundFour === winFour) {
            console.log("You Win Round Two!");
       } else if(i === 3 && roundFour === loseFour) {
            console.log("You Lose Round Two!");
       } else if(i === 3 && roundFour === tie) {
            console.log("It's a Tie!");
       } else if(i === 3) {
            console.log("Invalid Response");
       } else if(i === 4 && roundFive === winFive) {
            console.log("You Win Round Two!");
       } else if(i === 4 && roundFive === loseFive) {
            console.log("You Lose Round Two!");
       } else if(i === 4 && roundFive === tie) {
            console.log("It's a Tie!");
       } else if(i === 4) {
            console.log("Invalid Response");
       } else {
           console.log()
       }
   
    }
}









// playRound will letl you know if you win or lose
// game() needs to play five rounds, tell you the results of those 5 rounds, and calculate the overall winner
// You win!, You  win!, You lose!, You lose!, You lose! = you lose

// 0: playRound
// 1: new instance of playRound
// 2: new instance of playRound

//I now have a loop that displays 5 different round functions each with a different random variable
//from the computer

//I need a way to display if you have more wins or losses at the end of the loop

//if win 3 || 4 || 5 you win
//if win 2 && tie 2 || 3 you win
//if win 1 && tie 4 you win
//if win 2 && tie 1 you tie
//if win 1 && tie 3 you tie
//all else: you lose
