function bouncer(arr) {
  let newArr = [];
  let theVoid = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}

// Version that uses filter method (not mine, saved for self-referential reasons)

function bouncer(arr) {
  return arr.filter(Boolean);
}
