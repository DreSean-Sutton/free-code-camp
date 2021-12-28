/*
-create a variable named currentCharCode and assign it the value of null
create a variable named newStr and assign it the value of an empty string
create a for loop that:
  a. assigns the value of 0 to i
  b. execute code block if i is less than str.length
  c. i ++
  -if str[i].match(/\W/)
    newStr += str[i]
  -else if str.charCodeAt(i) + 13 is greater than 90
    currentCharCode = str.charCodeAt(i) - 13
    newStr += String.fromCharCode(currentCharCode)
  -else:
    currentCharCode = str.charCodeAt(i) + 13
    newStr += String.fromCharCode(currentCharCode)
-return newStr
*/

function rot13(str) {
  let currentCharCode = null;
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/\W/)) {
      newStr += str[i]
    } else if (str.charCodeAt(i) + 13 > 90) {
      currentCharCode = str.charCodeAt(i) - 13
      newStr += String.fromCharCode(currentCharCode)
    } else {
      currentCharCode = str.charCodeAt(i) + 13
      newStr += String.fromCharCode(currentCharCode)
    }
  }
  return newStr;
}

console.log(rot13("SERR PBQR PNZC"));
