// Write a function that finds the missing number in an array

input_array = [1, 2, 3, 4, 6, 7]
// input_array = [7, 6, 4, 3, 2, 1]
// Output = 5

function findMissingNumber(input_array) {
  for (let i=0; i< input_array.length; i++) {
    if (input_array[i+1] - input_array[i] !== 1) return input_array[i]+1
    // if (Math.abs(input_array[i+1] - input_array[i]) !== 1) return input_array[i]+1
  }
}

console.log(findMissingNumber(input_array))