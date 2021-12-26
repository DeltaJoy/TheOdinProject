
// // -------------------CREATE COMPUTERPLAY FUNCTION TO RANDOMLY SELECT ROCK PAPER OR SCISSORS ---------------//

function computerPlay () {
    let move = ["rock", "paper", "scissors"];
    let randomMoveSelected = move[Math.floor(Math.random()*move.length)];
    return randomMoveSelected;
}

// }
// //---------------------------------------- CHECK--------------------------------------------------------//
// // compterPlay function can be called multiple times on same liveServer and will return 
// // a different option each time, either (rock, paper, scissors) 






// // -------------------CREATE SINGLEROUNDGAME FUNCTION TO PLAY 1 GAME OF ROCK PAPER SCISSORS ---------------//
// // -----------------------------SINGLEROUNDGAME(USERPLAY, COMPUTERPLAY) ----------------------------------//
// // ---------------------------USERPLAY PARAMETER NEEDS TO BE CASE INSENSITIVE ----------------------------//


function playersMove () {
    let userPlay = prompt("make your pick ...");
    let caseUserPlay = userPlay.toLowerCase();
    
    if (caseUserPlay === "rock" || caseUserPlay === "paper" || caseUserPlay === "scissors") {
        return caseUserPlay;
    } else {
        return "Please make a valid selection ...";
    }
}


// //---------------------------------------- CHECK--------------------------------------------------------//





// function playRound(playerSelection, computerSelection) {
    
//     playerSelection = playersMove();

//     computerSelection = computerPlay();
    

//     if ((playerSelection === "rock" && computerSelection === "scissors") ||
//         (playerSelection === "paper" && computerSelection === "rock") ||
//         (playerSelection === "scissors" && computerSelection === "paper")) {
//             return ("WINNER");
//         }

//     if ((playerSelection === "paper" && computerSelection === "scissors") ||
//         (playerSelection === "scissors" && computerSelection === "rock") ||
//         (playerSelection === "rock" && computerSelection === "paper")) {
//             return ("LOSER");
//         }

//     if ((playerSelection === "rock" && computerSelection === "rock") ||
//         (playerSelection === "paper" && computerSelection === "paper") ||
//         (playerSelection === "scissors" && computerSelection === "scissors")) {
//             return ("DRAW");
//         }


// }

// NOTENOTENOTENOTE
// this will work fine by doing playRound(); 
// if i move //     playerSelection = playersMove();

//     computerSelection = computerPlay();
// outside the function it would need parameters because they are now global scope

// the way I have it, they are in functional scope and do not need paramters because they are defined in the fucntion already
    



function playRound() {
    
    playerSelection = playersMove();

    computerSelection = computerPlay();
    

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            userScore++;
            return ("WINNER");
        }

    if ((playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "paper")) {
            compScore++;
            return ("LOSER");
        }

    if ((playerSelection === "rock" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "scissors")) {
            return ("DRAW");
        }

    }









    let userScore = 0
    let compScore = 0
    // let winnerScore = 5

    // function scoreCard () {

    //     if (userScore > 5 || compScore > 5) {
            
    // }






    function game() {

        // for(let score = 0; score = 5; score++) 
        while(userScore<5 || compScore<5) {
            console.log(playRound());
        }
        
        if (userScore === 5) {
            console.log("USER WINS");
        } else if (compScore === 5) {
            console.log("COMPUTER WINS");
        }
    }


        // if (playRound === "DRAW") 


    





































// dont worry about this this is an exmaple from help 

// function sum(a, b){

//     a = Math.floor(Math.random()*5)+1;
//     b = Math.floor(Math.random()*100)+1;
  
//     return a+b
//   }
  
//   // what will we get if we call 
