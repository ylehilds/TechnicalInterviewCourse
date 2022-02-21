// # Given an array of integers, return indices of the two numbers such that they add up to a specific target
// # You may assume that each input would have exactly one solution, and you may not use the same element twice
// # This problem came from leetcode.com

input_array = [2, 5, 6, 3, 9] 
input_target = 11
// # Output = [2, 3]

function twoSum(array, target) {
    for (let i=0;i<input_array.length;i++) {
        for (let j=1;j<input_array.length;j++) {
            if (i === j) continue // don't add the same number together
            if (input_array[i] + input_array[j] === target) return [i, j]
        }
    }
    return false
}

console.log(twoSum(input_array, input_target))
