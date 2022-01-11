// Say you have an array for which the ith element is the price of a given stock on day i
// If you were only permitted to complete at most one transaction (i.e, buy one and
// sell one share of the stock) design an algorithm to find the maximum profit
// This problem came from leetcode.com

// input_array = [7, 1, 5, 3, 6, 4]
prices = [7,1,5,3,6,4]
// input_array = [2,4,1]
// input_array = [1, 2]
// input_array = [3,2,6,5,0,3]
// Output = 5

let maxProfit = function(input_array) {
  let best_profit = 0
  for (let i=0; i < input_array.length; i++) {
    for (let j=i+1; j < input_array.length; j++) {
      let check_profit = input_array[j] - input_array[i]
      if (check_profit > best_profit) best_profit = check_profit
    }
  }
  return best_profit
}

function best_time_to_buy_stock_optimized(prices) {
  if (prices.length === 0) return 0
  let minSoFar = prices[0]
  let maxProfit = 0
  for (let i=0; i<prices.length;i++) {
    if (prices[i] < minSoFar) minSoFar = prices[i]
    if (prices[i] - minSoFar > maxProfit) maxProfit = prices[i] - minSoFar
  }
  return maxProfit
}


console.log(best_time_to_buy_stock_optimized(prices))