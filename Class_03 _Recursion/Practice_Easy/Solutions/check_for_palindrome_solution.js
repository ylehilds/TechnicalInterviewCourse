// # Write a function that checks if a string is a palindrome using recursion
let word = 'racecar'
function isPalindrome(word) {
  if (word.length !== 0) {
    if (word[0] !== word[word.length -1]) return false
    else isPalindrome(word.substring(0, word.length -1))
  }
  return true
}

console.log(isPalindrome(word))