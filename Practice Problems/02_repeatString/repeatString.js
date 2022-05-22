const repeatString = function(string, num) {
    let somestring= string
    if (num <0) {
        return ("ERROR")
    }
    // if (somestring = "") {
    //     let ok = ""
    //     let joining = (ok.repeat(num))
    //     return joining
    // }
    return(somestring.repeat(num))
};



// Do not edit below this line
module.exports = repeatString;
