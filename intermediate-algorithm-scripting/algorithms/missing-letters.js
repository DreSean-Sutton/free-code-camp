/*
-create a variable named currentCharCode and assign it the value of str.charCodeAt(0)
-create a for loop that:
  a. assigns the value of 0 to i
  b. executes code block if i is less than str.length
  c. i++
  -if str.charCodeAt(i) === currentCharCode
    currentCharCode++
  else:
    return String.fromCharCode(currentCharCode)
*/

function fearNotLetter(str) {
  let currentCharCode = str.charCodeAt(0)
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) === currentCharCode) {
      currentCharCode++
    } else {
      return String.fromCharCode(currentCharCode)
    }
  }
}

console.log(fearNotLetter("abce"));
