/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function(num) {
  let romanStringBuilder = ''
  const numString = num.toString()
  let numSize = numString.length
  for (let i =0; i < numString.length;i++) {
    romanStringBuilder += mapping(numString[i], numSize)
    numSize--
  }
  return romanStringBuilder
}

function mapping (num, numSize) {
  switch(numSize) {
    case 1:
      return romanNums[0][num]
    case 2:
      return romanNums[1][num]
    case 3:
      return romanNums[2][num]
    case 4:
      return romanNums[3][num]
    default:
      throw new Error('number not supported')
  }
}

const romanNums = [
  {
  '0': '',
  '1': 'I',
  '2': 'II',
  '3': 'III',
  '4': 'IV',
  '5': 'V',
  '6': 'VI',
  '7': 'VII',
  '8': 'VIII',
  '9': 'IX'
  },
  {
    '0': '',
    '1': 'X',
    '2': 'XX',
    '3': 'XXX',
    '4': 'XL',
    '5': 'L',
    '6': 'LX',
    '7': 'LXX',
    '8': 'LXXX',
    '9': 'XC'
  },
  {
    '0': '',
    '1': 'C',
    '2': 'CC',
    '3': 'CCC',
    '4': 'CD',
    '5': 'D',
    '6': 'DC',
    '7': 'DCC',
    '8': 'DCCC',
    '9': 'CM'
  },
  {
    '0': '',
    '1': 'M',
    '2': 'MM',
    '3': 'MMM'
  }
  ]

console.log(intToRoman(10))