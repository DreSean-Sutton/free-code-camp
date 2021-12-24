function sumFibs(num) {
  let newNum = 0;
  let prevNum = 1;
  let currNum = 1;
  for (currNum; currNum <= num;) {
    if (currNum % 2 !== 0) {
      newNum += currNum
      currNum += prevNum
      prevNum = currNum - prevNum
    } else {
      currNum += prevNum
      prevNum = currNum - prevNum
    }
  }
  return newNum + 1;
}

console.log(sumFibs(10));

// WHILE LOOP VERSION OF THIS ALGORITHM BELOW

function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

// test here
sumFibs(4);
