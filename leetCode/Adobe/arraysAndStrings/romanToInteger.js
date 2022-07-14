/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
  let intNum = 0
  for (let i = 0; i < s.length; i++) {
    const num1 = mapping(s[i])
    const num2 = mapping(s[i+1])
    if (num2 === undefined) {
      intNum += num1
      break
    }
    if (s[i] === 'I' && ['V', 'X'].includes(s[i+1])) {
      intNum += num2 - num1
      i++
      continue
    }
    else if (s[i] === 'X' && ['L', 'C'].includes(s[i+1])) {
      intNum += num2 - num1
      i++
      continue
    }
    else if (s[i] === 'C' && ['D', 'M'].includes(s[i+1])) {
      intNum += num2 - num1
      i++
      continue
    }
    intNum += num1
  }
  return intNum
}

function mapping (num) {
  switch(num) {
    case 'I':
      return 1
    case 'V':
      return 5
    case 'X':
      return 10
    case 'L':
      return 50
    case 'C':
      return 100
    case 'D':
      return 500
    case 'M':
      return 1000
    default:
      return undefined
  }
}

console.log(romanToInt('XXIV'))