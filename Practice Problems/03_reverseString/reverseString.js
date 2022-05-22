const reverseString = function(x) {
    let someString = x
    let splitting = someString.split("")
    let reversing = splitting.reverse()
    let adding = reversing.join("")
    return(adding)
    
};

// Do not edit below this line
module.exports = reverseString;
