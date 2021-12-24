// 1) create a function called computerPlay that will randomly select 
//    rock paper or scissors 


let move = ["rock", "paper", "scissors"];

function computerPlay() {
    return move[Math.floor(Math.random()*move.length)];
}

console.log(computerPlay());


// single round of rock paper scissors with two parameters ...
// playerSelection, and computerSelection are the variables


function singleRoundGame (playerSelection, computerSelection)
    if 