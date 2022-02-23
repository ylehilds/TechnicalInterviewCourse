// 8. What is a callback function?
//   - A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// Simply put, callbacks are just functions that are passed in as arguments to other functions. Period.

function action(x, y, callback) {
  return callback(x, y);
}

function multiplication(x, y) {
  return x * y;
}

function addition(x, y) {
  return x + y;
}

console.log(action(10, 10, multiplication)); // output: 100

console.log(action(10, 10, addition)); // output: 20
