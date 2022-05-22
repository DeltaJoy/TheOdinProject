const ftoc = function(temp) {
  let convertedC = (temp - 32)*(5/9)
  let fixedC = convertedC.toFixed(1)
  let tointC = Number(fixedC)
  return tointC
  // return convertedC
};

const ctof = function(temp) {
  let convertedF = ((temp)*(9/5))+32
  let fixedF = convertedF.toFixed(1)
  let tointF = Number(fixedF)
  return tointF
  // return convertedF

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
