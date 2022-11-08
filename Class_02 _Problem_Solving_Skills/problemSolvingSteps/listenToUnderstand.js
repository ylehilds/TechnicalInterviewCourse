// Write a function that takes two numbers and returns their sum

// inputs
    // what if a string is input?
    // type: number (for JS), int/float/double/etc. for other languages
    // max/min input
// outputs
    // int? float? string? number?
    // if input is null/invalid, should we return undefined? null? error message?

// sum 2 numbers and return sum
function sum(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2
  }
  else return 'One/Both numbers is/are not number(s)'
}

console.log(sum(1,2))
console.log(sum('hello',2))
console.log(sum(1,2.5))
console.log(sum(1,[3]))
console.log(sum(1,{id:3}))