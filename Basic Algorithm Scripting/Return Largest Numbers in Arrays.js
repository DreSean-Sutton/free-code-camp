function largestOfFour(arr) {
  var allHighestNums = [];
  for (let i = 0; i < arr.length; i++) {
    var highestNum = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > highestNum) {
        highestNum = arr[i][j];
      }
    }
    allHighestNums.push(highestNum)
  }
  return allHighestNums;
}
