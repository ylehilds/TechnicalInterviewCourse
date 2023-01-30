// naive solution:
function sameNaive(arr1, arr2) {
  let found
  let returnValue = false
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let i=0; i< arr1.length;i++) {
    frequencyCounter1[arr1[i]] ? frequencyCounter1[arr1[i]] +=1 : frequencyCounter1[arr1[i]] = 1
    // Condition #1 squared value must be found on second array
    found = false
    for (let j=0;j<arr2.length;j++) {
      if (i === 0) {
        frequencyCounter2[arr2[j]] ? frequencyCounter2[arr2[j]] +=1 : frequencyCounter2[arr2[j]] = 1
      }
      let x = Math.pow(arr1[i], 2)
      let y = arr2[j]
      if ( x === y) found = true
      if (found === true) {
        if (i !== 0) break
      }
    }
    if (found === false) return returnValue
  }
  returnValue = true

  // #2 condition: The frequency of values must be the same.
  for (const [key, value] of Object.entries(frequencyCounter1)) {
    // console.log(key, value)
    if (frequencyCounter1[parseInt(key)] !== frequencyCounter2[Math.pow(parseInt(key), 2)]) return false
  }
  return returnValue
}

// optimized solution:
function sameOptimized(arr1, arr2) {
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let i=0; i< arr1.length;i++) frequencyCounter1[arr1[i]] ? frequencyCounter1[arr1[i]] +=1 : frequencyCounter1[arr1[i]] = 1
  for (let j=0;j<arr2.length;j++) frequencyCounter2[arr2[j]] ? frequencyCounter2[arr2[j]] +=1 : frequencyCounter2[arr2[j]] = 1
  // Condition: The frequency of values must be the same and key squared must be found on second array.
  for (const [key, value] of Object.entries(frequencyCounter1)) {
    // console.log(key, value)
    if (frequencyCounter1[parseInt(key)] !== frequencyCounter2[Math.pow(parseInt(key), 2)]) return false
  }
  return true
}

console.log(sameOptimized([1,2,3,4,5], [1,25,16,4,9]))
