

// ----------------------------------GLOBAL SCOPE---------------------------------

let userChoice = prompt("make your selection...");
let playerSelection = userChoice.toLowerCase();

//--------------------------------------------------------------------------------






//-----------------------------COMPUTER MOVE FUNCTION-----------------------------


function computerPlay () {
    let move = ["rock", "paper", "scissors"];
    let compRandomMove = move[Math.floor(Math.random()*move.length)];
    return compRandomMove;
}

//--------------------------------------------------------------------------------







//--------------------------SINGLE ROUND FUNCTION------------------------------------


function singleRoundGame (playerSelection, computerSelection) {


    let computerSelectionMove = computerPlay(computerSelection);

    if (playerSelection === "rock" && computerSelectionMove === "scissors") {
        return "Winner!";
    } else if (playerSelection === "rock" && computerSelectionMove === "paper") {
        return "Loser!";
    } else if (playerSelection === "rock" && computerSelectionMove === "rock"){
        return "Draw!";
    } else {
        "Let's have another go shall we...?";
    }


    if (playerSelection === "paper" && computerSelectionMove === "scissors") {
        return "Loser!";
    } else if (playerSelection === "paper" && computerSelectionMove === "paper") {
        return "Draw!";
    } else if (playerSelection === "paper" && computerSelectionMove === "rock"){
        return "Winner!";
    } else {
        "Let's have another go shall we...?";
    }



    if (playerSelection === "scissors" && computerSelectionMove === "scissors") {
        return "Winner!";
    } else if (playerSelection === "scissors" && computerSelectionMove === "paper") {
        return "Loser!";
    } else if (playerSelection === "scissors" && computerSelectionMove === "rock"){
        return "Draw!";
    } else {
        "Let's have another go shall we...?";
    }
}

//--------------------------------------------------------------------------------





//--------------------------------GAME FUNCTION-------------------------------

function game(singleRoundGame) {

    
