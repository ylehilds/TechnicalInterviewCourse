/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  if (num !== 0)
  {
    if (num % 2 === 0) {
      return 1 + numberOfSteps(num/2)
    } else {
      return 1 + numberOfSteps(num-1)
    }
  }
  return 0
};

console.log(`numberOfSteps: ${numberOfSteps(14)}`)
console.log(`numberOfSteps: ${numberOfSteps(8)}`)
console.log(`numberOfSteps: ${numberOfSteps(123)}`)
