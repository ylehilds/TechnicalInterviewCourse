// Given an array of integers, find if the array contains any duplicates
// Your function should return false if every element is distinct.
// This problem came from leetcode.com

input_array = [1, 2, 3, 3, 4]
// Output = True
// ----------------------------------my implementation below:---------------------------------------------------------

function findDuplicate (input_array) {
let duplicate = false
let dictionary = {}
for (let int of input_array) {
  if (!dictionary.hasOwnProperty(int)) dictionary[int] = 'unique'
  else {
    dictionary[int] = 'duplicate'
    duplicate = true
  }
}
  console.log(`dictionary: ${JSON.stringify(dictionary)}`)
  return duplicate
}
console.log(findDuplicate(input_array))
