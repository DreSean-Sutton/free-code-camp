/*
create a variable named newStr and assign it the value of an empty string
-create a for loop that:
  a. assigns the value of 0 to variable i
  b. executes code block if i is less than str.length
  c. i++
  -if str[i] is strictly equal to '
    newStr += &apos;
  -else if str[i] is strictly equal to "
    newStr += &quot;
  -else if str[i] is strictly equal to >
    newStr += &gt;
  -else if str[i] is strictly equal to <
    newStr += &lt;
  -else if str[i] is strictly equal to &
    newStr += &amp;
  -else:
    newStr += str[i]
return newStr
*/

function convertHTML(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '\'') {
      newStr += '&apos;';
    } else if (str[i] === '\"') {
      newStr += '&quot;';
    } else if (str[i] === '\>') {
      newStr += '&gt;';
    } else if (str[i] === '\<') {
      newStr += '&lt;';
    } else if (str[i] === '\&') {
      newStr += '&amp;';
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

convertHTML("Dolce & Gabbana");
