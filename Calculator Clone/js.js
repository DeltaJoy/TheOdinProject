// ReactDOM.render(<h1>Hello</h1>, document.getElementById("one"))




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
const doMathAdd = document.getElementById("add")
const doMathSub = document.getElementById("subtract")
const doMathDiv = document.getElementById("divide")
const doMathMul = document.getElementById("muiltiply")





function adding() {
    console.log (c+d)
}

doMathAdd.addEventListener("click", adding())

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
let saved1Value = 0
let saved2Value = 0


integers.forEach(number => {
    number.addEventListener("click", () => {
        
        num1Array.push(number.innerText)
        saved1Value = num1Array.join("")
        document.getElementById("answerSection").innerText = saved1Value
        if(num1Array.length > 8) {
            number.disabled = true
        }
        console.log(saved1Value)
        onClickOpp()


        

        // section 1//
    })
    // moved this section of code down it was in sectin 1
    clearButton.onclick = () => {
        num1Array.length = 0
        document.getElementById("answerSection").innerText = num1Array 
    }
})


function onClickOpp () {

    operator.forEach(opp => {
        // opp.addEventListener("click", ()=> {
        //     console.log('hi')
        // })

        opp.onclick = () => {

            let toIntSaved1 = parseInt(saved1Value)

            clearSlate()
            // let joiningNum1Array = num1Array.join("")



            // function operatorMath (toIntSaved1,b, math) {
                
            //     if ( math == addition) {
            //         console.log(toIntSaved1 + b)
            //     } else if ( math == subtraction )  {
            //         console.log(toIntSaved1 - b)
            //     } else if ( math == multiplication ) {
            //         console.log(toIntSaved1 * b)
            //     } else if ( math == division ) {
            //         console.log(toIntSaved1 / b)
            //     }
            // }
            
        }
    })

}



// let arr = [1,2,3]
// let joined = arr.join("")
// let int = parseInt(joined)
// console.log(typeof
//     (int))
// let sub = int - 2

function clearSlate () {
    num1Array.splice(0, num1Array.length)
    document.getElementById("answerSection").innerText = num1Array

  
    

}

