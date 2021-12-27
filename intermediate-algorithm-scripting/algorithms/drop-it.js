/*
-create a for loop that:
  a. assigns the value of 0 to i
  b. execute code block if i is less than arr.length
  c. i++
  -if func(arr[i]) is true
    return arr.slice(i)
return []
*/

function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr.slice(i)
    }
  }
  return []
}
console.log(dropElements([1, 2, 3], function (n) { return n < 3; }));

//OTHER WAY TO SOLVE THE ALGORITHM BELOW

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
