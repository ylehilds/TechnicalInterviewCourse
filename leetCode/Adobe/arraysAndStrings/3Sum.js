/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
  let dict = {}
  for (let i=0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      // if (i === j) continue
      for (let k = 2; k < nums.length; k++) {
        // if ([j, k].includes(i) || [i, k].includes(j) || [j, i].includes(k)) continue
        if (i !== j && i !== k && j !== k) {
          if ((nums[i] + nums[j] + nums[k]) === 0) {
            let numsIAbs = Math.abs(nums[i]) || 1
            let numsJAbs = Math.abs(nums[j]) || 1
            let numsKAbs = Math.abs(nums[k]) || 1
            if (!dict[numsIAbs + numsJAbs + numsKAbs]) dict[numsIAbs + numsJAbs + numsKAbs] = [nums[i], nums[j], nums[k]]
            // else {
            //   dict[numsIAbs + numsJAbs + numsKAbs].push([nums[i], nums[j], nums[k]])
            // }
          }
        }
      }
    }
  }
  let arrayHelper = []
  for (const [key, value] of Object.entries(dict)) {
    arrayHelper.push(value)
  }
  return arrayHelper
}

// console.log(threeSum([-1,0,1,2,-1,-4]))
// console.log(threeSum([-2,0,1,1,2]))
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))