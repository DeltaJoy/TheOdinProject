






function computerPlay () {
    let move = ["rock", "paper", "scissors"];
    let compRandomMove = move[Math.floor(Math.random()*move.length)];
    return compRandomMove;
}


    let playerSelection = prompt("make your selection...");
    // ???? mkae this a function and plce it i x value spot. 




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
        return "Draw!";
    } else if (playerSelection === "scissors" && computerSelectionMove === "paper") {
        return "Winner!";
    } else if (playerSelection === "scissors" && computerSelectionMove === "rock"){
        return "Loser!";
    } else {
        "Let's have another go shall we...?";
    }
}

console.log(singleRoundGame(playerSelection, computerPlay()));
console.log(singleRoundGame(playerSelection, computerPlay()));
console.log(singleRoundGame(playerSelection, computerPlay()));
console.log(singleRoundGame(playerSelection, computerPlay()));
console.log(singleRoundGame(playerSelection, computerPlay()));