/*
-create a variable named twoArr and assign it the value of an empty array
-create a variable named sumOfAll and assign it the value of 0
-if arr at position 0 is greater than arr at position 1:
  assign the value of [arr[1], arr[0]] to twoArr
-else
  assign the value of arr to twoArr
create a for loop that:
  a. assigns the value of twoArr[0] to variable i
  b. executes code block if i is less than or equal to twoArr[1]
  c. increments i by 1
  sumOfAll += i
-return sumOfAll
*/

function sumAll(arr) {
  let twoArr = [];
  let sumOfAll = 0;

  if (arr[0] > arr[1]) {
    twoArr = [arr[1], arr[0]]
  } else {
    twoArr = [arr[0], arr[1]];
  }
  for (let i = twoArr[0]; i <= twoArr[1]; i++) {
    sumOfAll += i
  }
  return sumOfAll;
}

console.log(sumAll([1, 4]));

// ANOTHER WAY TO DO THE SAME FUNCTION BELOW

function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumOfAll = 0;
  for (let i = min; i <= max; i++) {
    sumOfAll += i;
  }
  return sumOfAll;
}

sumAll([1, 4]);
