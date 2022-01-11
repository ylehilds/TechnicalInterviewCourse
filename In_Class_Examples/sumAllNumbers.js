function addNumbers(n) {
  if (n !== 0) return n -1 + addNumbers(n-1)
  else return 0
}
console.log(addNumbers(5))