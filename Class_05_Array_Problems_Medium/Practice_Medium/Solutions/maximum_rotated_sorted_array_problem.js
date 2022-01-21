// # Suppose an array sorted in ascending order is rotated at some pivot unknown
// # to you beforehand. Find the maximum number in the sorted array. You may assume no duplicate exists in the array.
// # This problem came from leetcode.com

input_array = [3, 4, 5, 6, 1, 2]
// # Output = 6


function findMax(nums) {
  let low = 0
  let high = nums.length -1

  while (nums[0] > nums[high]) {
    let mid = parseInt((low + high) /2)
    if (nums[mid] < nums[high]) high = mid
    else low = mid
  }
  return nums[low]
}

console.log(findMax(input_array))

// couldn't finish in class