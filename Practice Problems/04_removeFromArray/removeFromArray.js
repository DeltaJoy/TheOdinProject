const removeFromArray = function(...main) {
    return main.reduce((array1, removals) => {
        return array1.filter(e => e !== removals)
    })






    // let removalsFromArr = removals

    // let newArray = array.filter(e => e !== removals) 
    // return newArray
    

};




// Do not edit below this line
module.exports = removeFromArray;
