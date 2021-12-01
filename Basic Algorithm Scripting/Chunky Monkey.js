function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let sizeIncrement = size;
  for (let i = 0; i < arr.length;) {
    let tempArr = arr.slice(i, size)
    newArr.push(tempArr)
    i += sizeIncrement;
    size += sizeIncrement;
  }
  return newArr;
}

//OTHER VERSIONS OF THIS FUNCTION BELOW

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}
