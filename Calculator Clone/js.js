// function calculator() {
//     let integers = document.querySelectorAll(".int")
//     let operator = document.querySelectorAll(".opp")
//     let decimal = document.querySelector(".dec")
//     let percentage = document.querySelector(".per")
//     let clearButton = document.querySelector(".cl")
//     let equals = document.querySelector(".eq")
//     let negatives = document.querySelector(".neg")
//     let answer = document.querySelector(".ans")

//     let currentMath = ""
//     let currentNumber1 = ""
//     let currentNumber2 = ""


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


// calculator()
    let integers = document.querySelectorAll(".int")


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



let displayValue = function () {



    // integers.forEach(number => {
    //     number.addEventListener("click", () => {
    //         document.getElementById("answerSection").innerText = number.innerText
            
    //     })
    // })
    
}


let num1Array = []
integers.forEach(number => {
    number.addEventListener("click", () => {
        
        num1Array.push(number.innerText)
        document.getElementById("answerSection").innerText = num1Array.join("")
        if(num1Array.length > 8) {
            number.disabled = true
        }
        
    })
})


document.getElementById("one").addEventListener("click", displayNumbers)