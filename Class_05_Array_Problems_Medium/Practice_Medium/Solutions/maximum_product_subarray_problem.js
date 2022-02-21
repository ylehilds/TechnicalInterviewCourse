// # Given an integer array nums, find the contiguous subarray within an array (containing at
// # least one number) which has the largest product.
// # This problem came from leetcode.com

inputArray = [2, 3, -2, 4, 8, 2, -1, -2]
// # output: 6

var maxProduct = function(inputArray) {
  let allContiguousArrays = []
  for (let i = 0; i < inputArray.length; i++) {
    allContiguousArrays.push([inputArray[i]])
    for (let j = i + 1; j < inputArray.length; j++) {
      console.log(`j: ${j}`)
      if (inputArray[j - 1] + 1 === inputArray[j]) allContiguousArrays[i].push(inputArray[j])
      else break
    }
  }

  let biggestProduct = 0
  for (let myArray of allContiguousArrays) {
    if (myArray.length < 2) continue
    else {
      let maxProduct = 1
      for (let subArray of myArray) {
        maxProduct *= subArray
      }
      if (maxProduct > biggestProduct) biggestProduct = maxProduct
    }
  }

  console.log(allContiguousArrays)
  return biggestProduct
}

console.log(`maxProduct: ${maxProduct(inputArray)}`)
