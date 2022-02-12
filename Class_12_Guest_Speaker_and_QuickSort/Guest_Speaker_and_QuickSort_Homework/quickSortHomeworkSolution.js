let inputArray = [4,8,6,5,200,99,23,56,89,1,0,2,10,50,60,44,7]
function quickSort(array) {
  let pivot
  let itemsGreater = []
  let itemsLower = []

  let arrayLength = array.length
  if (arrayLength <=1) return array
  else pivot = array.pop()

  for (const number of array) {
    if (number > pivot) itemsGreater.push(number)
    else itemsLower.push(number)
  }
  // return quickSort(itemsLower).concat([pivot], quickSort(itemsGreater))
  return [...quickSort(itemsLower), ...[pivot], ...quickSort(itemsGreater)]
}

console.log(quickSort(inputArray))