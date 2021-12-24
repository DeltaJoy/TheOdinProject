




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


// step 2 
// write a function that plays a single round of rock paper scissors
// function should take 2 parameters (playerSelection, comouterSelection)

// RETURN "you win", or "you lose!, or "draw!"


function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    if (playerSelection === "rock" && computerSelection === "rock") {
        return ("It's a Draw! You both selected rock.");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return ("You Lose! Paper beats rock.");
    } else (playerSelection === "rock" && computerSelection === "scissors") 
        return ("You Win! Rock beats scissors.")
}

//variables assigned to determine what is a win and what is a loss

const win = "You Win! Rock beats scissors.";
const loss = "You Lose! Paper beats rock.";

//variable assigned to determine what the final gamescore will be
//variables assigned to the starting value of both the user and cmputer

const gameScore = 5
let userScore = 0; 
let compScore = 0;
let thisRound = undefined;

//a function to add 1 point to the userscore if the playround function records a win or 1 point
// to the compscore if the playround records a loss 

function 

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



// a function called game() that plays 5 rounds of R.P.S.

function game() {

    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
 
}

function theWinner () {
    if (compScore === 5) {
        return ("Game OVER");
    } else 
        return("keep playing");
}



let tweet = prompt("Compose your tweet here");
let tweetLength = tweet.length;
let allowedCharacters = alert("You have used " + tweetLenght + 
" characters. You have " + 140-tweetLength + " remaining");