const leapYears = function(num) {
    // let newNum = num + 400
    // if ((newNum) % 100 == 0 && (newNum) % 400 == 0) {
    //     return true
    // }
    // else if(newNum % 4 == 0 && newNum % 400 == 0) {
    //     return true
    // // } else if (newNum % 4 == 0) {
    // //     return true
    // } else {
    //     return false 
    // }

    if(num % 400 == 0) {
        return true
    } else if (num % 4 == 0 && num % 100 != 0) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
