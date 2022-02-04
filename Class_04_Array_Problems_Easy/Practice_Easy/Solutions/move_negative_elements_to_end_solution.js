// # Write a function that moves all negative elements to the end of an array

input_array = [-1, 2, -3, 4, 5, 7]
// # Output = [2, 4, 5, 7, -3, -1]

function moveNegativeToEnd(array) {
    let arrayHelper = []
    for (let i=0; i < array.length; i++) {
        if (array[i] < 0) {
            arrayHelper.push(array[i])
            array.splice(i, 1)
            i--
        }
    }
    return array.concat(arrayHelper)
}

console.log(moveNegativeToEnd(input_array))
