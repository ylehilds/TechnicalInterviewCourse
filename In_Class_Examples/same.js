function same(arr1, arr2) {
  let found
  for (let i=0; i< arr1.length;i++) {
    found = false
    for (let j=0;j<arr2.length;j++) {
      let x = Math.pow(arr1[i], 2)
      let y = arr2[j]
      if ( x === y) found = true
      if (found === true) break
    }
    if (found === false) return false
  }
  return true
}

console.log(same([1,2,3,4,5], [1,25,16,4,9]))
