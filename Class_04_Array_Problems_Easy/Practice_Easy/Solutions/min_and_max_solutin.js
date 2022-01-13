// Write a function that finds the minimum and maximum in an array

input_array = [1, 2, 7, 9, -11, 10, 20, 1037]
// Output = -11, 1037

function findMinAndMax(input_array) {
  let min = input_array[0]
  let max = input_array[0]
  for (let i =0; i < input_array.length; i++) {
    if (i === 0) {
      continue
    }
    if (input_array[i] < min) min = input_array[i]
    if (input_array[i] > max) max = input_array[i]
  }
  console.log(`min: ${min}`)
  console.log(`max: ${max}`)
}

console.log(findMinAndMax(input_array))
