// let tups = [("akash", 10), ("gaurav", 12), ("anand", 14),
//   ("suraj", 20), ("akhil", 25), ("ashish", 30)]

let tups = [["akash", 10], ["gaurav", 12], ["anand", 14],
  ["suraj", 20], ["akhil", 25], ["ashish", 30]]

function listToDictionary(array) {
  let dictionary = {}
  for (let dict of array) {
    dictionary[dict[0]] = dict[1]
  }
  return dictionary
}

console.log(listToDictionary(tups))
