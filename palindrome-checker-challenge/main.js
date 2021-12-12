function palindrome(str) {
  let result = '';
  let reverseResult = '';
  let myRegex = /[a-z0-9]/gi;
  result = str.toLowerCase().match(myRegex);
  reverseResult = result.slice(0).reverse();
  if (result.join('') === reverseResult.join('')) {
    return true;
  } else {
    return false;
  }
}
