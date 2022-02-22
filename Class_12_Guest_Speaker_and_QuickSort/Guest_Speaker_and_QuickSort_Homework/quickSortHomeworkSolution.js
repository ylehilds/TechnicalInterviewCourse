// # Guest Speaker and QuickSort Assignment
//
// - Prepare a question for each of the two guest speakers. The questions can be about interview preparation, interviews, hiring, or software engineering careers. Paste your questions into the quiz.
// - Here is information about each guest speaker:
//   - Daryl Pinkal
// - Company: Clozd
// - Position: CTO, Product/Engineering
// - Arlin Hayden
// - Company: LookingGlass Cyber Solutions Inc.
// - Position: Principal Software Engineer
// - Watch the following two videos about quicksort:
//   - https://www.youtube.com/watch?v=Hoixgm4-P4M
// - https://www.youtube.com/watch?v=kFeXwkgnQ9U
// - Here is an additional resource to look at about quicksort:
//   - https://www.geeksforgeeks.org/python-program-for-quicksort
// - Write a qui

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