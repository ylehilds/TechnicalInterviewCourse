test_dict = {'Nikhil' : {'English' : 5, 'Maths' :  2, 'Science' : 14},
  'Akash' : {'English' : 15, 'Maths' :  7, 'Science' : 2},
  'Akshat' : {'English' : 5, 'Maths' :  50, 'Science' : 20}}


function sortByValue(dict) {
  // Create items array
  let items = Object.keys(dict).map(function (key) {
    return [key, dict[key]]
  })

// Sort the array based on the second element
  items.sort(function (first, second) {
    return first[1]['Maths'] - second[1]['Maths']
  })

return items
}

console.log(sortByValue(test_dict))