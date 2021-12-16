function titleCase(str) {
  let finishedStr = '';
  let lowerCaseStr = str.toLowerCase()
  let upperCaseLetter = str[0].toUpperCase()
  let oneCapitalized = upperCaseLetter + lowerCaseStr.substring(1)
  for (let i = 0; i < str.length; i++) {
    if (oneCapitalized[i] === ' ') {
      let capital = oneCapitalized[i + 1].toUpperCase()
      finishedStr += ' ' + capital;
      i++
    } else {
      finishedStr += oneCapitalized[i]
    }
  }
  return finishedStr;
}
