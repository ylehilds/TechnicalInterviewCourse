// Write a function that calculates the sum of an array of numbers using recursion. You must use recursion to gain full credit for this question.

//   Example:
// input = [3,6,2,9,9,4]
// output = 33

const inputArray = [3,6,2,9,9,4]

function sumNum(array) {
  //base case
  if (array.length === 0) return 0
  let temp = array.shift()
  return temp + sumNum(array)
}

console.log(sumNum(inputArray))