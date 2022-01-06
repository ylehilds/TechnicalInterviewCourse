function charCount(str) {
  let result = {}
  let lowerStr = str.toLowerCase()
  for (let i=0; i < lowerStr.length; i++) {
    let char = lowerStr[i]
    if (/[a-z0-9]/.test(char)) {
      result[char] ? result[char] +=1 : result[char] = 1
    }
  }
  return result
}

console.log(charCount("hello"))
console.log(charCount(""))
console.log(charCount("Hello"))
console.log(charCount("Hello World!"))