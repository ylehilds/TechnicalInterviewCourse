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

const input1 = [45, 98, 3, 24, 15, 77, 9, 50] // [3, 9, 15, 24, 45, 50, 77, 98]
const input2 = [18, 16, 27, 4, 12] // [4, 12, 16, 18, 27]

console.log(mergeSort(input1))
console.log(mergeSort(input2))
