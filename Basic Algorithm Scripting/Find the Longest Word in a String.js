function findLongestWordLength(str) {
  let splitStr = str.split(' ');
  let largestLength = 0;

  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length > largestLength) {
      largestLength = splitStr[i].length;
    }
  }
  return largestLength;
}

//RECURSIVE VERSION OF FUNCTION BELOW (Not mine, but saving for self-referential reasons)

function findLongestWordLength(str) {
  // split the string into individual words
  const words = str.split(" ");

  // words only has 1 element left that is the longest element
  if (words.length == 1) {
    return words[0].length;
  }

  // if words has multiple elements, remove the first element
  // and recursively call the function
  return Math.max(
    words[0].length,
    findLongestWordLength(words.slice(1).join(" "))
  );
}
