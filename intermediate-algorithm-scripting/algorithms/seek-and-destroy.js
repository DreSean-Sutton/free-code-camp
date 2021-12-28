/*
-create a new variable named subArr and assign it the value of an empty string
-create a new variable named newArr and assign it the value of an empty string

-create a for loop that:
  a. assigns the value of 1 to i
  b. executes code block if i is less than arguments.length
  c. i++
  push the value of arguments[i] into subArr

-create a for loop that:
  a. assigns the value of 0 to j
  b. code block is executed if j is < arguments[0].length
  c. j++
  if subArr.includes(arguments[0][j]) is not true
    push the value of arguments[0][j] into newArr
-return newArr
*/

function destroyer(arr) {
  // debugger;
  let subArr = [];
  let newArr = [];

  for (let i = 1; i < arguments.length; i++) {
    subArr.push(arguments[i])
  }

  for (let j = 0; j < arguments[0].length; j++) {
    if (!subArr.includes(arguments[0][j])) {
      newArr.push(arguments[0][j]);
    }
  }
  return newArr
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
