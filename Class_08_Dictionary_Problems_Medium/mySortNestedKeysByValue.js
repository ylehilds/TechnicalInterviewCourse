test_dict = {'Nikhil' : {'English' : 5, 'Maths' :  2, 'Science' : 14},
  'Akash' : {'English' : 15, 'Maths' :  7, 'Science' : 2},
  'Akshat' : {'English' : 5, 'Maths' :  50, 'Science' : 20}}

function sortByValue(dict) {
  let items = Object.entries(dict) // Create items array
  for (let [person, subjects] of items) {
    let sortable = []
    sortable = Object.entries(subjects)
    sortable.sort(function (first, second) { // Sort the array based on the second element (ascending)
      return first[1] - second[1]
    })
    dict[person] = Object.fromEntries(sortable)
  }
return dict
}

console.log(sortByValue(test_dict))
