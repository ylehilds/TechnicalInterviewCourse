// “Write a function called same, which accepts two arrays.
//   The function should return true if every value in the array has its corresponding value squared in the second array.
//   The frequency of values must be the same.”

let arr1 = [1,2,3,2]
let arr2 = [9,1,4,4]


function getDictionary(word) {
  let dictHelper = {}
  for (let character of word) {
    dictHelper[character] ?  dictHelper[character] +=1 :  dictHelper[character] = 1
  }
  return dictHelper
}

function same(array1, array2) {
  if (array1.length !== array2.length) return false
  let dict1 = getDictionary(array1)
  let dict2 = getDictionary(array2)
  for (const [key, value] of Object.entries(dict1)) {
    if (!(key **2 in dict2)) return false
    if(dict2[key **2] !== dict1[key]) return false
  }
  return true
}

console.log(`The squared finding in second dictionary is : ${same(arr1, arr2)}`)