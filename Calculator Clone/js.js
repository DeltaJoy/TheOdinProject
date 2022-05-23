// function calculator() {
//     let integers = document.querySelectorAll(".int")
//     let operator = document.querySelectorAll(".opp")
//     let decimal = document.querySelector(".dec")
//     let percentage = document.querySelector(".per")
    // let clearButton = document.querySelector(".cl")
//     let equals = document.querySelector(".eq")
//     let negatives = document.querySelector(".neg")
//     let answer = document.querySelector(".ans")



//     //adding event listner to each number 
//     //logging out each number for with the inner HTML
//     //return this number and save it all the first number 


//     function getFirstValue () {
//         integers.forEach(num => {
//             num.addEventListener("click", () => {
//                 currentNumber1 = (num.innerHTML)
//             })
//          })

//     }


    
// }

let integers = document.querySelectorAll(".int")
const clearButton = document.getElementById("clear")
const operator = document.querySelectorAll(".opp")



let addition = function (a, b) {
    return a+b
}

let subtraction = function (a,b) {
    return a-b
}

let multiplication = function (a,b) {
    return a*b
}

let division = function (a,b) {
    return a/b
}

let operate = function (a,b, math) {
    if ( math == addition ) {
        console.log(a + b)
    } else if ( math == subtraction )  {
        console.log(a - b)
    } else if ( math == multiplication ) {
        console.log(a * b)
    } else if ( math == division ) {
        console.log(a / b)
    }
}







let num1Array = []
let num2Array = []
integers.forEach(number => {
    number.addEventListener("click", () => {
        
        num1Array.push(number.innerText)
        document.getElementById("answerSection").innerText = num1Array.join("")
        if(num1Array.length > 8) {
            number.disabled = true
        }
        
        // section 1//
    })

    // moved this section of code down it was in sectin 1
    clearButton.onclick = () => {
        num1Array.length = 0
        document.getElementById("answerSection").innerText = num1Array
        
    }


    //logs the operator in the calculator and will store num1array 

    operator.forEach(opp => {
        opp.addEventListener("click", ()=> {

        })

        opp.onclick = () => {
            
            console.log(num1Array)
            let joiningNum1Array = num1Array.join("")
            let toIntNum1Array = parseInt(joiningNum1Array)
            console.log(toIntNum1Array)

            let operate = function (toIntNum1Array,b, math) {
                if ( math == addition ) {
                    console.log(a + b)
                } else if ( math == subtraction )  {
                    console.log(a - b)
                } else if ( math == multiplication ) {
                    console.log(a * b)
                } else if ( math == division ) {
                    console.log(a / b)
                }
            }
        }
        

    })

})



let arr = [1,2,3]
let joined = arr.join("")
let int = parseInt(joined)
console.log(typeof
    (int))
let sub = int - 2

