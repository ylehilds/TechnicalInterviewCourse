// Say you have an array for which the ith element is the price of a given stock on day i
// If you were only permitted to complete at most one transaction (i.e, buy one and
// sell one share of the stock) design an algorithm to find the maximum profit
// This problem came from leetcode.com

// let input_array = [7, 1, 5, 3, 6, 4]
// let input_array = [7,1,5,3,6,4]
// let input_array = [2,4,1]
// let input_array = [1, 2]
let input_array = [3,2,6,5,0,3]
// Output = 5

let maxProfitBruteForce = function(input_array) {
  let profit = 0
  let maximumProfit = 0
  for (let i=0; i < input_array.length; i++) {
    const offSet = i + 1
    for (let j= offSet; j < input_array.length; j++) {
      profit = input_array[j] - input_array[i]
      if (profit > maximumProfit) maximumProfit = profit
    }
  }
  return maximumProfit
}

let maxProfitOptimized = function(input_array) {
  let minPrice = 0
  let maxProfit = 0
  for (let i=0; i < input_array.length; i++) {
    if (i === 0) {
      minPrice = input_array[i]
      continue
    }
    if (input_array[i] < minPrice) minPrice = input_array[i]
    if ((input_array[i] - minPrice) > maxProfit) maxProfit = input_array[i] - minPrice
  }
  console.log(`maxProfit: ${maxProfit}`)
  console.log(`minPrice: ${minPrice}`)
  return maxProfit
}

console.log(`brute force: ${maxProfitBruteForce(input_array)}`)
console.log(`optimized: ${maxProfitOptimized(input_array)}`)