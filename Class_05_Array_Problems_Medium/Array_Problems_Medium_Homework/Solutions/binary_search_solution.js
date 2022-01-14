// # Search an array of numbers to find a target number using binary search.
// # The function should return the index of the target number if the target number is found
// # or a -1 if the target is not found in the array.

input_array = [1, 2, 5, 9, 12, 15, 21, 28, 99, 100, 117]
input_target = 21
// # Output = 6

function binarySearch(input_array, input_target) {
  let lowerBoundIndex = 0
  let upperBoundIndex = input_array.length - 1
  while (lowerBoundIndex <= upperBoundIndex) {
    let midIndex = parseInt((lowerBoundIndex + upperBoundIndex)/2)
    if (input_array[midIndex] === input_target) return midIndex
    else if (input_array[midIndex] < input_target) lowerBoundIndex = midIndex + 1
    else upperBoundIndex = midIndex - 1
  }
  return -1
}

console.log(`binarySearch result index found at: ${binarySearch(input_array, input_target)}`)
