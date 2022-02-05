/*
Given an array nums of size n, return the majority element. 
The majority element is an element that appears more than [n/2] times. 
You may assume that the majority element always exists in the array.

Input = [3, 2, 3]
Output = 3

Input = [2, 2, 1, 1, 1, 2, 2]
Output = 2

Source: https://leetcode.com/problems/majority-element/
*/

const arr1 = [3, 2, 3] // 3
const arr2 = [2, 2, 1, 1, 1, 2, 2] // 2

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

function findMajority(array) {
  let sortedArray = mergeSort(array)
  let middleIndex = Math.floor(sortedArray.length / 2)
  return sortedArray[middleIndex]
}

console.log(`the majority element for arr1 is: ${findMajority(arr1)}`)
console.log(`the majority element for arr2 is: ${findMajority(arr2)}`)

