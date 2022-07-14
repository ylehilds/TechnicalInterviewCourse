/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
  const first = strs[0]
  let stringBuilderTest = ''
  let validatedStringBuilder = ''
  for (let i = 0; i < first.length; i++) {
    stringBuilderTest += first[i]
    for (let j = 1; j < strs.length; j++) {
      if (!strs[j].startsWith(stringBuilderTest)) return validatedStringBuilder
    }
    validatedStringBuilder += first[i]
  }
  return validatedStringBuilder
}

// console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix([""]))
console.log(longestCommonPrefix(["c","acc","ccc"]))
