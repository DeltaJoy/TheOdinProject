const sumAll = function(a,b) {
    let total = 0
    if (a <= 0 || b <= 0|| typeof(a) === "string" || typeof(b) === "string") {
        return("ERROR")
    }
    else if (isNaN(a) == true || isNaN(b) == true) {
        return("ERROR")
    }
    else if(a>b) {
        for(let i = b; i<a+1; i++) {
            total += i
        }
        return(total)
    
        
    }else if (b>a) {
        for (let i=a; i<b+1; i++) {

        total += i
            
        }
        return(total)
    }
};

// Do not edit below this line
module.exports = sumAll;


