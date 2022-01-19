// # Suppose an array sorted in ascending order is rotated at some pivot unknown
// # to you beforehand. Find the minumum number in the sorted array. You may assume no duplicate exists in the array.
// # This problem came from leetcode.com
//
input_array = [3, 4, 5, 6, 1, 2]
// # Output = 1

function findMinRotatedArrayBinSearch(input_array) {
    let lowerBoundIndex = 0
    let upperBoundIndex = input_array.length - 1
    while (input_array[lowerBoundIndex] > input_array[upperBoundIndex]) {
        let midIndex = parseInt((lowerBoundIndex + upperBoundIndex)/2)
        if (input_array[midIndex] > input_array[upperBoundIndex]) lowerBoundIndex = midIndex + 1
        else upperBoundIndex = midIndex
    }
    return input_array[lowerBoundIndex]
}

console.log(`Min value is: ${findMinRotatedArrayBinSearch(input_array)}`)
