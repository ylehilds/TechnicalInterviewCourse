// # Given an array nums of n integers where n > 1, return an array output such that output[i]
// # is equal to the product of all the elements of nums except nums[i]
// # Note: Please solve it without division
// # This problem came from leetcode.com

input_array = [1, 2, 3, 4]
// # Output = [24, 12, 8, 6]

function productOfArrays(nums) {
  let productArray = []
  for (let i =0; i<nums.length;i++) {
    let numbHelper = 1
    for (let j=0; j<nums.length;j++) {
      if (i === j) continue
      numbHelper *= nums[j]
    }
    productArray.push(numbHelper)
  }
  return productArray
}

console.log(productOfArrays(input_array))
