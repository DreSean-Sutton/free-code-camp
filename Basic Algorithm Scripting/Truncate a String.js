function truncateString(str, num) {
  if (str.length > num) {
    var newStr = str.substring(0, num) + '...'
    return newStr
  } else {
    return str
  }
}

// RECURSIVE VERSION OF FUNCTION BELOW (Not mine, is self-referential)

function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}
