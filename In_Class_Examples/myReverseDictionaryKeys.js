test_dict = {'B' : 4, 'Y' : 2, 'U' : 5}

function reverseDictionaryOrder(dictionary) {
  let dictHelper = {}
  for (const [key, value] of Object.entries(dictionary)) {
    dictHelper[value] = key
  }
  return dictHelper
}

console.log(reverseDictionaryOrder(test_dict))