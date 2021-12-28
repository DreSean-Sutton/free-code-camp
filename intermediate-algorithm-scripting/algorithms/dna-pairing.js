/*
-create a variable named arr and assign it the value of an empty array
-create a for loop that:
  a. assigns the value of 0 to i
  b. executes code block if i is less than str.length
  c. i++
  -if str[i] is strictly equal to the string A
    push(['A', 'T']) into arr
  -else if str[i] is strictly equal to the string T
    push(['T', 'A']) into arr
  -else if str[i] is strictly equal to the string C
    push(['C', 'G']) into arr
  -else
    push(['G', 'C']) into arr
-return arr
*/

function pairElement(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'A') {
      arr.push(['A', 'T'])
    } else if (str[i] === 'T') {
      arr.push(['T', 'A'])
    } else if (str[i] === 'C') {
      arr.push(['C', 'G'])
    } else {
      arr.push(['G', 'C'])
    }
  }
  return arr;
}

console.log(pairElement("GCG"));
