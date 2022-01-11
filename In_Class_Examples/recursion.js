let helper = ''
function stringReverse(myString) {
  if (myString.length !== 0) {
    helper += myString[myString.length -1]
    stringReverse(myString.substring(0, myString.length -1))
  }
  return helper
}
console.log(stringReverse("hello world"))
