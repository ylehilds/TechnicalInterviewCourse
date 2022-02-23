// Array question
// Binary Search
// # Search an array of numbers to find a target number using binary search.
// # The function should return the index of the target number if the target number is found
// # or a -1 if the target is not found in the array.

/*
input_array = [1, 2, 5, 9, 12, 15, 21, 28, 99, 100, 117]
input_target = 21
// # Output = 6

function binarySearch(array, target) {
  let lowBoundaryIndex = 0
  let upperBoundaryIndex = array.length - 1
  while(lowBoundaryIndex <= upperBoundaryIndex) {
    let middleIndex = Math.floor( (lowBoundaryIndex + upperBoundaryIndex) / 2)
    if (array[middleIndex] === target) return middleIndex
    else if (array[middleIndex] < target) lowBoundaryIndex = middleIndex + 1
    else upperBoundaryIndex = middleIndex - 1
  }
  return false
}

console.log(binarySearch(input_array, input_target))
*/

// ---------------------------------------------------------------------------------------------------------------------------
// Merge Sort
// Write a merge sort algorithm to sort an array.
// The function should return the sorted array.
//
// two examples
/*
array1 = [45, 98, 3, 24, 15, 77, 9, 50] // output: [3, 9, 15, 24, 45, 50, 77, 98]
array2 = [18, 16, 27, 4, 12] // output: [4, 12, 16, 18, 27]

function mergeSort(array) {
  if (array.length < 2) return array
  let half = Math.floor(array.length / 2)
  let left = array.slice(0, half)
  let right = array.slice(half, array.length)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let arrayHelper = []
  while (left.length && right.length) {
    if (left[0] < right[0]) arrayHelper.push(left.shift())
    else arrayHelper.push(right.shift())
  }
  return [...arrayHelper, ...left, ...right]
}

console.log(mergeSort(array1))
console.log(mergeSort(array2))
*/


// ---------------------------------------------------------------------------------------------------------------------------
// Quick Sort
// Write a quicksort
/*
let inputArray = [4,8,6,5,200,99,23,56,89,1,0,2,10,50,60,44,7]

function quickSort(array) {
  let itemsGreater = []
  let itemsLower = []
  let pivot
  if (array.length <= 1) return array
  else pivot = array.pop()

  for (let element of array) {
    if (element < pivot) itemsLower.push(element)
    else itemsGreater.push(element)
  }
  return [...quickSort(itemsLower), ...[pivot], ...quickSort(itemsGreater)]
}

console.log(quickSort(inputArray))
*/


// ---------------------------------------------------------------------------------------------------------------------------
