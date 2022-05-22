const add = function(a,b) {
	let sum = a+b
  return sum
};

const subtract = function(a,b) {
	let sub = (a - b)
  console.log(sub) 
};

const sum = function(arr) {
  // if (arr == []) {
  //   console.log(0)
  // } else if (arr[0]) {
  //   console.log(arr[0])
  // } else {
  //   let total = arr.reduce(function(first, second) {
  //     return first + second
  //   })
  //   console.log(total)
  // }

  let total = 0
  arr.forEach(function(number) {
    return total += number
  })
  return total
  

};




const multiply = function(arr) {
  let total = 0
  arr.reduce(function(first, second) {
    return total = (first * second)
  })
  return total
};





const power = function(a,b) {
	let toThePower = a**b;
  return toThePower
};




const factorial = function(a) {
    let total = 1
    for (let i = a; i>0; i--) {
      (total *= i)

  }
    if (a === 0) {
        return 1
    }
    return total
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
