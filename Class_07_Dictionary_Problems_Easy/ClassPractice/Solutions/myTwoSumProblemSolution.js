/**
Given an array nums and an integer target, return the indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1] (because nums[0] + nums[1]  == 9)

Input: nums = [3,2,4], target = 6
Output: [1, 2] 

Input: nums = [3,3], target = 6
Output: [0,1]

Source: https://leetcode.com/problems/two-sum/
*/

const nums1 = [2, 7, 11, 15]
const target1 = 9

const nums2 = [3,2,4]
const target2 = 6

const nums3 = [3, 3]
const target3 = 6

function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] === target) return [i, j]
    }
  }
}

function twoSumDict(nums, target) {
  let dict  = {}
  for (let i = 0; i < nums.length; i++) {
    const neededNum = target - nums[i]
    if (neededNum in dict) {
      return [dict[neededNum], i]
    } else {
      dict[nums[i]] = i
    }
  }
  return undefined
}

console.log(twoSumDict(nums3, target3))
