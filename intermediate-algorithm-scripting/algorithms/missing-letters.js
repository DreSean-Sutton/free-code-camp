/*
-create a variable nameed newArr and assign it the value of an empty array
-create a for loop that:
  a. assigns the value of 0 to i
  b. code block is executed if i is less than arguments.length
  c. i++
  -create a for loop that:
    a. assigns the value of 0 to j
    b. code block is executed if j is less than arguments[i].length
    c. j++
    -if newArr.includes(arguments[i][j]) is not true
      newArr.push(arguments[i][j])
-return newArr
*/

function uniteUnique(arr) {
  let newArr = [];
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (!newArr.includes(arguments[i][j])) {
        newArr.push(arguments[i][j])
      }
    }
  }
  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
