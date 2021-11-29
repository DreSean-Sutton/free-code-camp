function repeatStringNumTimes(str, num) {
  let repeatedWord = ''
  for (var i = 0; i < num; i++) {
    repeatedWord += str;
  }
  return repeatedWord;
}

// Other versions of this function below

function repeatStringNumTimes(str, num) {
  var accumulatedStr = "";

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}

function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}
