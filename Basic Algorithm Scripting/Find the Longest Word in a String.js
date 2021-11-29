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
