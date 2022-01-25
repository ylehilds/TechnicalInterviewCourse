/* 
Given an integer array, give the maximum product of a triplet in an array.

Examples:
Input = [10, 3, 5, 6, 20]
Output = 1200 (product of 10, 6, and 20)

Input:  [-10, -3, -5, -6, -20]
Output: -90

Input:  [1, -4, 3, -6, 7, 0]
Output: 168

Source: https://www.geeksforgeeks.org/find-maximum-product-of-a-triplet-in-array/
*/

function mergeSort(array) {
  const half = array.length/2
  if (array.length < 2) return array // recursion base case
  const left = array.slice(0, half)
  const right = array.slice(half, array.length)
  return merge(mergeSort(left), mergeSort(right)) //divide and conquer, keep splitting (recursion) until left/right is an array of 1, merge as to sort left/right recursively
}

function merge (left, right) {
  const sortedArray = []
  while(left.length && right.length) {
    if (left[0] < right[0]) sortedArray.push(left.shift()) // compare first number from left & right and push the lower number to sortedArray while removing it from left/right accordingly
    else sortedArray.push(right.shift())
  }
  return [...sortedArray, ...left, ...right] //to account for any left overs from left/right, just append/add it to sortedArray, the appending data would be already sorted
}

const factors1 = [10, 3, 5, 6, 20] // 1200
const factors2 = [-10, -3, -5, -6, -20] // -90
const factors3 = [1, -4, 3, -6, 7, 0] // 21

function findMaxProduct(array) {
  let maxProduct = mergeSort(array)
  return (maxProduct[array.length - 1] * maxProduct[array.length - 2] * maxProduct[array.length - 3])
}

console.log(findMaxProduct(factors3))