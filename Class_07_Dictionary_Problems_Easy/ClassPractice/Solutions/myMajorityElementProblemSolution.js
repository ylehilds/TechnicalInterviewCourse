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

function findMajorityElement(array) {
  let dict = getDictionary(array)

  let majorityElement = 0
  let majorityElementKey = ''
  for (const [key, value] of Object.entries(dict)) {
    if (value > majorityElement) {
      majorityElement = value
      majorityElementKey = key
    }
  }
  return majorityElementKey
}

function getDictionary(word) {
  let dictHelper = {}
  for (let character of word) {
    dictHelper[character] ?  dictHelper[character] +=1 :  dictHelper[character] = 1
  }
  return dictHelper
}

console.log(findMajorityElement(arr2))
