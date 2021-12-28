/*
-create a variable named fullArr and assign it the value of arr1.push(arr2)
-create a for loop that:
  a. assigns the value of 0 to i
  b. execute code block if i is < fullArr.length
  c. i++
    if arr1.includes(fullArr[i]) is false
      newArr.push(fullArr[i])
    if arr2.includes(fullArr[i]) is false
      newArr.push(fullArr[i])
-return newArr
*/

function diffArray(arr1, arr2) {
  const newArr = [];
  let fullArr = arr1.concat(arr2)
  for (let i = 0; i < fullArr.length; i++) {
    if (!arr1.includes(fullArr[i])) {
      newArr.push(fullArr[i])
    }
    if (!arr2.includes(fullArr[i])) {
      newArr.push(fullArr[i])
    }
  }
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// ANOTHER WAY TO DO THE SAME FUNCTION BELOW (Not mine, saved for self referential reasons)

function diffArray(arr1, arr2) {
  var newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (var i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
