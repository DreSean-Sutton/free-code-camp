function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}

//RECURSIVE SOLUTION BELOW (not mine, saved for self-referential reasons)

function findElement(arr, func) {
  return arr.length && !func(arr[0])
    ? findElement(arr.slice(1), func)
    : arr[0];
}
