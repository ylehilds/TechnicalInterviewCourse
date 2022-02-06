test_dict = {'B' : 4, 'Y' : 2, 'U' : 5}

function reverseDictionaryOrder(dictionary) {
  const revertedDict = Object.keys(dictionary).reverse()
  let dictHelper = {}
  for (const key of revertedDict) {
    dictHelper[key] = dictionary[key]
  }
  return dictHelper
}

console.log(reverseDictionaryOrder(test_dict))