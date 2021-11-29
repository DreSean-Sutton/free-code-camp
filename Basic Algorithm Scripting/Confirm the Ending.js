function confirmEnding(str, target) {
  let endOfString = '';
  endOfString = str.substring(str.length - target.length)
  if (endOfString === target) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"));

// BETTER FUNCTION BELOW

function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}
