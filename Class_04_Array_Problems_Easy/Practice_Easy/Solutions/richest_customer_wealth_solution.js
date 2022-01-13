// # You are given an m x n integer grid accounts where accounts[i][j]
// # is the amount of money the ith customer has in the jth bank.
// # Return the wealth that the richest customer has.
// # A customer's wealth is the amount of money they have in all their bank accounts.
// # The richest customer is the customer that has the maximum wealth.

input_accounts = [[2,8,7],[7,1,3],[1,9,5]]
// # Output: 17
let highestMoney = 0

function findRichest(input_accounts) {
  for (let account of input_accounts) {
    let max = 0
    for (let money of account) {
      max += money
    }
    if (max > highestMoney) highestMoney = max
  }
  return highestMoney
}

console.log(`max: ${findRichest(input_accounts)}`)