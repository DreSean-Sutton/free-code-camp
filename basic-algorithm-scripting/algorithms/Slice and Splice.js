function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    newArr.splice(n, 0, arr1[i])
    n++
  }
  return newArr;
}

// Quicker version of function below

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}
