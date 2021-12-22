/*
-create a variable named vowels and assign it the value of the regex /aeiou/i
-create a for loop that:
  a. assigns the value of 0 to i
  b. executes code block if i is less than str.length
  c. i++
  -if vowels.test(str[i]) and i is not strictly equal to 0
    return str.slice(i) + str.slice(0, i - 1) + 'ay'
  -else if vowels.test(str[i]) and i is strictly equal to 0
    return str + 'way'
  -else:
    return str + 'ay'
*/

function translatePigLatin(str) {
  let vowels = /[aeiou]/
  for (let i = 0; i < str.length; i++) {
    if ((vowels.test(str[i])) && (i !== 0)) {
      return str.slice(i) + str.slice(0, i) + 'ay';
    } else if ((vowels.test(str[i])) && (i === 0)) {
      return str + 'way';
    }
  }
  return str + 'ay'
}

console.log(translatePigLatin("consonant"));

// OTHER WAY OF COMPLETING THE SAME PROBLEM BELOW THAT UTILIZES PURE REGEX

function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}
