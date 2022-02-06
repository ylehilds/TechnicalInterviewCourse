// Given a dictionary, sort the keys by the sum of their values in descending order. Return an array with the sorted pairs.

  // Example:
// old_dict = { 'A' : [1, 2, 3], 'B' : [1, 7, 3], 'C' : [100, 3, 7], 'D' : [6, 50, 4]}
// output = [['C', 110], ['D', 60], ['B', 11], ['A', 6]]

const dict = { 'A' : [1, 2, 3], 'B' : [1, 7, 3], 'C' : [100, 3, 7], 'D' : [6, 50, 4]}

function descendingSort(dict) {
  let dictHelper = {}
  let values = Object.entries(dict)
  for (let value of values) {
    let sum = 0
    for (let num of value[1]) {
      sum += num
    }
    dictHelper[value[0]] = sum
  }
  // sort the dictionary
  let dictionaryArray = Object.entries(dictHelper)
  dictionaryArray.sort(function(a,b) {
    return b[1] - a[1]
  })

  return dictionaryArray
}

console.log(descendingSort(dict))
