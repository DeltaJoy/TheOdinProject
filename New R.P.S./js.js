

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


    computerSelection = computerPlay();

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Winner!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "Loser!";
    } else if (playerSelection === "rock" && computerSelection === "rock"){
        return "Draw!";
    } else {
        "Let's have another go shall we...?";
    }


    if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Loser!";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Draw!";
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return "Winner!";
    } else {
        "Let's have another go shall we...?";
    }



    if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Winner!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Loser!";
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "Draw!";
    } else {
        "Let's have another go shall we...?";
    }
}

//--------------------------------------------------------------------------------





//--------------------------------GAME FUNCTION-------------------------------

