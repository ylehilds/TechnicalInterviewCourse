/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let temp = []
  let numStringified = x.toString()
  if (numStringified.length === 1) return x
  for (let i=0; i < numStringified.length +1; i++) {
    let num = numStringified[numStringified.length - i -1]
    if (temp.length === 0 && num === '0') continue
    if (num === '-') {
      temp.unshift(num)
      break
    }
    temp.push(num)
  }
  let respNumber = parseInt(temp.join(''))
  if (respNumber <= Math.pow(-2, 31) || respNumber >= Math.pow(2, 31) -1) respNumber = 0
  return respNumber
}

console.log(reverse(0))