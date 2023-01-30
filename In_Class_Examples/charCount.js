function dictCharCount(str) {
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

function charCount(str) {
  let result = {}
  let lowerStr = str.toLowerCase()
  for (let i=0; i < lowerStr.length; i++) {
    let char = lowerStr[i]
    if (/[a-z0-9_.,!?"']/.test(char)) {
      result[char] ? result[char] +=1 : result[char] = 1
    }
  }
  const temp = Object.values(result)
  if (temp.length === 0) return 0
  return temp.reduce((a,b) => {
    return a + b
  })
}

console.log(dictCharCount("hello"))
console.log(dictCharCount(""))
console.log(dictCharCount("Hello"))
console.log(dictCharCount("Hello World!"))
console.log(charCount("How are you today?"))
console.log(charCount("I'm good!"))