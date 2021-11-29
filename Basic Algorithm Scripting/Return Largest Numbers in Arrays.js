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

//SHORTER VERSION OF FUNCTION BELOW (Not mine, saved for self-referential reasons)

function largestOfFour(arr, finalArr = []) {
  return !arr.length
    ? finalArr
    : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
}
