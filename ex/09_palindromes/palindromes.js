const palindromes = function (someString) {
 

    //the main string//
    let x = someString

    //to lower case // 
    let toLow = x.toLowerCase()

    //splitting main string and filtering out spaces
    let splittingX = toLow.split("")
    let removedSpaceX = splittingX.filter(function(letter) {
        return letter !== " "
    })

    //joining string back together with no spaces 
    let joinX = removedSpaceX.join("")

    //found online for removing puncuation //
    let finalRemoval = joinX.replace(/[^\p{L}\s]/gu,"")
    //-------------------------- console.log(finalRemoval)

    //-----------part 2 ----------// 

    //splitting the reversed string to lower case/
    let split = toLow.split("")

    //reversing it//
    let reverse = split.reverse()
    


    //removing spaces from the reversed string //
    let newReverse = reverse.filter(function(letter) {
        return letter !== " "
    })

    //joining the reversed string back together with no spaces // 
    let reversedJoined = newReverse.join("")

    // filtering out any puncation for reversed string //
    let finalRemovalForRerversed = reversedJoined.replace(/[^\p{L}\s]/gu,"")
    // --------------------------console.log(finalRemovalForRerversed)



    // comparing the two strings//


    if (finalRemoval == finalRemovalForRerversed) {
        return true
    } else {
        return false
    }

};

// Do not edit below this line
module.exports = palindromes;
