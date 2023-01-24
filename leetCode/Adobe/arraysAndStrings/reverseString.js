/**
 * @param {string} str
 * @return {string}
 */

var reverseString = function(str) {
  let temp = ''
  for (let i = 0; i < str.length; i++) {
    temp += str[str.length - i - 1]
  }
  return temp
}

console.log(reverseString('ollopA'))
