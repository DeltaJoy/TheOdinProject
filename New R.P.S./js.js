const computerChoiceDisplay = document.querySelector("#computer_choice")
const userChoiceDisplay = document.querySelector("#user_choice")
const resultDisplay = document.getElementById("result")

// const possibleChoices = document.querySelectorAll("button")
const  possibleChoices = document.querySelectorAll("button.picked")
const restartGameButton = document.querySelector("#restart")
// command shift K removes line
// option shift down adds exact line
//  ==option shift k 



const resultScoreBoardUser = document.getElementById("scoreBoardUser")
const resultScoreBoardComp = document.getElementById("scoreBoardComp")
let userPick
let computerChoiceFromFunction
let result
let userScore = 0
let compScore = 0
let totalScore = 5



// possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
//     console.log(e.target.id)
// }))


possibleChoices.forEach(pick=> pick.addEventListener("click", (e) => {
    userPick = (e.currentTarget.id)
    userChoiceDisplay.innerHTML = userPick
    computerPlay()
    getResult()
    gameScoreTracker() 
    
}))


restartGameButton.addEventListener("click", restartGame)


function restartGame () {
    userScore = 0
    compScore = 0
    resultScoreBoardUser.innerHTML = 0;
    resultScoreBoardComp.innerHTML = 0;
    computerChoiceDisplay.innerHTML = null
    userChoiceDisplay.innerHTML = null
    resultDisplay.innerHTML =  null
 
}

function computerPlay () {
    let move = ["rock", "paper", "scissors"];
    computerChoiceFromFunction = move[Math.floor(Math.random()*move.length)];
    computerChoiceDisplay.innerHTML = computerChoiceFromFunction

}


function getResult() {

   if (computerChoiceFromFunction === userPick) {
       result = "Draw"
    }
   if (computerChoiceFromFunction === "rock" && userPick === "scissors") {
       result = "Loss";
    }
   if (computerChoiceFromFunction === "paper" && userPick === "rock") {
    result = "Loss";
    }
   if (computerChoiceFromFunction === "scissors" && userPick === "paper") {
       result = "Loss";
    }
   if (computerChoiceFromFunction === "scissors" && userPick === "rock") {
    result = "Win";
    }
   if (computerChoiceFromFunction === "rock" && userPick === "paper") {
       result = "Win";
    }
   if (computerChoiceFromFunction === "paper" && userPick === "scissors") {
    result = "Win"
    
    }

    resultDisplay.innerHTML = result

}


// function gameScoreTracker() {
//     if (result === "Win") {
//        userScore++;
//        resultScoreBoardUser.innerHTML = userScore
//     }
//         if (userScore === 5) {
//             alert ("YOU WIN")
//         }
//     if (result === "Loss") {
//         compScore++;
//         resultScoreBoardComp.innerHTML = compScore
//     }
//         if (userScore === 5) {
//              alert ("COMPUTER WINS")
//         }
// }














//THIS IS THE ONE THAT  I WAS USING thAT WORKED//////// ---------------------

// function gameScoreTracker() {
//     if (result === "Win") {
//        userScore++;
//        resultScoreBoardUser.innerHTML = userScore
//     } else if (result === "Loss") {
//         compScore++;
//         resultScoreBoardComp.innerHTML = compScore
//     } else 
//         null;

//         if (userScore === totalScore) {
//             alert ("YOU WIN!!!!!");
//             // restartGame();
//         } else if (compScore === totalScore) {
//             alert ("YOU LOSE!!!");
//             // restartGame();

//         }
// }

//THIS IS THE ONE THAT  I WAS USING thAT WORKED//////// ---------------------




function gameScoreTracker () {
    if (result === "Win") {
        userScore++
        resultScoreBoardUser.innerHTML = userScore;
    }
        if (userScore === totalScore) {
            alert ("GAME OVER YOU HAVE WON THE GAME");
            restartGame();

        }
    if (result === "Loss") {
        compScore++
        resultScoreBoardComp.innerHTML = compScore;
    }
        if (compScore === totalScore) {
            alert ("GAME OVER YOU HAVE LOST THE GAME");
            restartGame();

        }
}