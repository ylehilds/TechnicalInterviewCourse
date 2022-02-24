// Array question
// write a function that finds 3 common elements on 3 arrays
let array1 = [1,2,2,3,4,5]
let array2 = [0,1,10,20]
let array3 = [1,2,4,5]
// output [1]

function commonality(arr1, arr2, arr3) {
  let dictionary = {}
  let helper = []
  for (let element of arr1) {
    dictionary[element] ? dictionary[element] =1 : dictionary[element] = 1
  }
  for (let element of arr2) {
    if(dictionary[element]) {
      dictionary[element] = 2
    }
  }
  for (let element of arr3) {
    if(dictionary[element] === 2) {
      dictionary[element] = 3
    }
  }
  for (const [key, value] of Object.entries(dictionary)) {
    if (value >= 3) helper.push(key)
  }
  return helper
  }

console.log(commonality(array1, array2, array3))