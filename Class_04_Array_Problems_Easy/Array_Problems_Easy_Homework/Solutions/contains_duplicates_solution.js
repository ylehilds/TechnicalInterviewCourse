// Given an array of integers, find if the array contains any duplicates
// Your function should return false if every element is distinct.
// This problem came from leetcode.com

input_array = [1, 2, 3, 3, 4]
// Output = True
// ----------------------------------my implementation below:---------------------------------------------------------

function findDuplicateBruteForce (input_array) {
  for (let i = 0; i < input_array.length; i++) {
    for (let j = 0; j < input_array.length; j++) {
      if (i === j) continue // skip where the comparison is the same index
      if (input_array[i] === input_array[j]) return true
    }
  }
  return false
}

function findDuplicateOptimized (input_array) {
let duplicate = false
let dictionary = {}
for (let int of input_array) {
  if (!dictionary.hasOwnProperty(int)) dictionary[int] = 'unique'
  else {
    dictionary[int] = 'duplicate'
    duplicate = true
  }
}
  console.log(`optimized dictionary content: ${JSON.stringify(dictionary)}`)
  return duplicate
}

console.log(`brute force method call: ${findDuplicateBruteForce(input_array)}`)
console.log(`optimized method call: ${findDuplicateOptimized(input_array)}`)
