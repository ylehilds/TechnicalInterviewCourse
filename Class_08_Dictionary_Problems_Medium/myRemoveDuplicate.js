test_dict = {
  'Manjeet': [1, 4, 5, 6],
  'Akash': [1, 8, 9],
  'Nikhil': [10, 22, 4],
  'Akshat': [5, 11, 22]
}

function removeDuplicates(dict) {
  let duplicateArray = []
  let values = Object.values(dict).flat()
  let ogValues = Object.values(dict)
  let numsFrequency = getDictionary(values)
  let numsArray = Object.entries(numsFrequency)
  for (const [number, frequency] of numsArray) {
    if (frequency > 1) duplicateArray.push(number)
  }
  for (let duplicate of duplicateArray) {
    for (let value of ogValues) {
      for (let [index, numValue] of value.entries()) {
        if (numValue === parseInt(duplicate)) value.splice(index, 1)
      }
    }
  }
  return dict
}

function getDictionary(nums) {
  let dictHelper = {}
  for (let num of nums) {
    dictHelper[num] ? dictHelper[num] += 1 : dictHelper[num] = 1
  }
  return dictHelper
}

console.log('Uncommon elements records :', removeDuplicates(test_dict))
