let firstNum = 0
let secondNum = 0
let numArray = []
let numArray2 = []
let choosenMath 



let integers = document.querySelectorAll(".int")
const clearButton = document.getElementById("clear")
const operator = document.querySelectorAll(".opp")
let answerSection = document.getElementById("answerSection")
const doMathAdd = document.getElementById("add")
const doMathSub = document.getElementById("subtract")
const doMathDiv = document.getElementById("divide")
const doMathMul = document.getElementById("muiltiply")





//////////////////////////////////////////////
// -----------SIMPLE MATH FUCTIONS-----------//
///////////////////////////////////////////////


function adding(firstNum, secondNum) {

    console.log (firstNum + secondNum)
}



let subtraction = function (firstNum, secondNum) {
    return (firstNum - secondNum)
}


let multiplication = function (firstNum, secondNum) {
    return (firstNum*secondNum)
}

let division = function (firstNum, secondNum) {
    return (firstNum /secondNum)
}



//////////////////////////////////////////////
// -----------GETTING NUMBERS-----------//
///////////////////////////////////////////////



function gettingFirst () {
    integers.forEach(function (num) {
        num.addEventListener("click", () => {
            numArray.push(num.innerHTML)
            let joinedArray = numArray.join("")
            let convertToNum = parseInt(joinedArray)
            answerSection.innerHTML = joinedArray
            firstNum = convertToNum
            console.log("the first array joined is" + firstNum)
            
            console.log("THE FIRST NUMBER IS " + firstNum)
        })
        return firstNum


    })



}

function operators () {
    operator.forEach(opp => {
        opp.onclick = function () {
            // numArray= []
            numArray.splice(0, numArray.length)
            console.log("the current array is " + numArray)
            let oppToUse = ( opp.innerHTML)
            console.log("the current opporator we are using is " + oppToUse)

            return oppToUse

        }
        
})
}

function gettingSecond () {



}



function clear () {
    clearButton.addEventListener("click", ()=> {
        numArray = []
        numArray2 = []
        firstNum = 0
        secondNum = 0
        answerSection.innerHTML = firstNum
    })
}

function calc () {
    answerSection.innerHTML = 0
    gettingFirst() //returns the first input saved in `firstNum` variable 
    operators() // clears out the array to make a number, selects a type of math and returns it
    // gettingSecond()


    clear()
}

calc()