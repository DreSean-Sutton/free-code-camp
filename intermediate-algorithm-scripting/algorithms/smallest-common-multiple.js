/*
-create a variable named maxNum and assign it the value of Math.max(arr)
-create a variable named minNum and assign it the value of Math.min(arr)
-create a for loop that
  a. assigns the value of maxNum to i
  b. excecutes code block until conditions are met
  c. i++ maxNum
  -create a for loop that
    a. assigns the value of maxNum - 1 to j
    b. code block is executed if j is more than or equal to minNum
    c. j--
    -if i % j !== 0
      break;
    -if i % j === 0 and j === minNum
      return i
*/

function smallestCommons(arr) {
  let maxNum = Math.max(...arr);
  let minNum = Math.min(...arr);
  for (let i = maxNum; i += maxNum;) {
    for (let j = maxNum - 1; j >= minNum; j--) {
      if (i % j !== 0) {
        break;
      }
      if ((i % j === 0) && (j === minNum)) {
        return i;
      }
    }
  }
}

console.log(smallestCommons([1, 5]));
