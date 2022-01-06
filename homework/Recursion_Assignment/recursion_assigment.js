// Given an integer n, return True if it is a power of 2.
// An integer n is a power of two, if there exists an integer x such that n == 2^x
//
// Examples:
//
// Input: n = 4
// Output: True
// 2^2 = 4
//
// Input : n = 16
// Output : True
// 2^4 = 16
//
// Input : n = 13
// Output : False

function powerOf2(n) {
  if (n === 1) return true // if after all the divisions you get n to be 1 then this n is a power of 2
  if (n % 2 === 0) return powerOf2(n/2) // if the mod 2 (division by 2 has no remaining then recursively call itself with n divided by 2)
  return false // if you reach this point in the code return false as this n is not a power of 2
  // alternatively w/out recursion I could simply make that determination by the below code:
  // return (n%2 === 0)
}

console.log(powerOf2(4))
console.log(powerOf2(16))
console.log(powerOf2(13))
console.log(powerOf2(15))
