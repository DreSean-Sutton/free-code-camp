function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  }
  return false;
}

//OTHER SOLUTION BELOW

function booWho(bool) {
  return typeof bool === "boolean";
}
