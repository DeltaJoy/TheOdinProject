const findTheOldest = function(people) {


    // part 1
    let sorting = people.sort((a,b) => {
        if (a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth) {
            return 1
        }
        if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth) {
            return -1
        }
        
    })

    // part 2
    return(sorting[0].name)

}


// name: "Carly",
// yearOfBirth: 1942,
// yearOfDeath: 1970,




// let findTheOldest = function(people) {
//    people.filter(function(person) {
//        console.log(person.yearOfDeath - person.yearOfBirth) 
//    })

// }

// Do not edit below this line
module.exports = findTheOldest;


