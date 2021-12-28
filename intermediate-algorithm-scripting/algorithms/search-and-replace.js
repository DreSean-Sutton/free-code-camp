/*
-create a variable named newAfter and assign it the value of an empty string
-create a variable named upperCaseRegex and assign it the value of /^[A-Z]/
-if upperCaseRegex.test(before) is true:
  assign the value of after.slice(0, 1).toUpperCase() + after.slice(1) to newAfter
-else:
  assign it the value of after.slice(0, 1).toLowerCase() + after.slice(1) to newAfter
-return str.replace(before, newAfter)
*/

function myReplace(str, before, after) {
  let newAfter = ''
  let upperCaseRegex = /^[A-Z]/
  if (upperCaseRegex.test(before)) {
    newAfter = after.slice(0, 1).toUpperCase() + after.slice(1)
  } else {
    newAfter = after.slice(0, 1).toLowerCase() + after.slice(1)
  }
  return str.replace(before, newAfter)
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
