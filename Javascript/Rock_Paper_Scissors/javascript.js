// step 1 
// create a function called computerPlay
// I want this function to randomly select "rock" "paper" or "scissors"

// To acheive this I will have to google how to make a function that 
// can do that. 

const movePlayed = ["rock", "paper", "scissors"];
const playerSelection = "rock";
let computerSelection = undefined;


function computerPlay() {
    return movePlayed[Math.floor(Math.random()*movePlayed.length)];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    if (playerSelection === "rock" && computerSelection === "paper") {
        return ("Loss! Paper beats rock.");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return ("Win! Rock beats scissors.");
    } else {
        return ("Draw!");
    }
    
}
 
console.log(playRound(playerSelection, computerSelection));



const win = "Win! Rock beats scissors.";
const loss = "Loss! Paper beats rock.";
const gameScore = 5
let userScore = 0; 
let compScore = 0;
let thisRound = undefined;

//a function to add 1 point to the userscore if the playround function records a win or 1 point
// to the compscore if the playround records a loss 

function scoreCard() {
    if ( playRound === win) {
        userScore++;
    } else (playRound === loss) 
        compScore++;

}





function seriesScore () {
    console.log(roundResult(playRound));
    console.log(roundResult(playRound));
    console.log(roundResult(playRound));
    console.log(roundResult(playRound));

}
seriesScore();