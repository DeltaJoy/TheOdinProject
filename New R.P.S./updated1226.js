
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
    


// -------------------------------------------------------------
// ---------------------------1-4-21------------------------------



// document.querySelectorAll("button").forEach((button) => {
//     button.addEventListener("click", () => {
//     console.log(button.id);
//     } );
// });





// const btnRock = document.querySelector("#rock");
//     btnRock.addEventListener("click", )


// const btnPaper = document.querySelector("#paper");
//     btnPaper.addEventListener("click", () =>{
//         console.log("paper");
// })


// const btnScissors = document.querySelector("#scissors");
//     btnScissors.addEventListener("click", () =>{
//     console.log("scissors");
//     })


// -------------------------------------------------------------
// ---------------------------1-7-21------------------------------

const choices1 = document.querySelector(".choice1");

choices1.addEventListener("click", playRound);

const hello = document.querySelector(".choice2");

hello.addEventListener("click", () => {
    console.log("paper");
});

const choices3 = document.querySelector(".choice3");

choices3.addEventListener("click", () => {
    console.log("scissors");
});








function playRound() {
    
    // playerSelection = playersMove();

  

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
    let winnerScore = 5
  

    // function scoreCard () {

    //     if (userScore > 5 || compScore > 5) {
            
    // }



    



    function game() {

        // for(let score = 0; score = 5; score++) 
        while(userScore < winnerScore && compScore < winnerScore) {
            console.log(playRound());
        }
        
        if (userScore === winnerScore) {
            console.log("USER WINS");
        } else {
        console.log("COMPUTER WINS");
        }

    }




