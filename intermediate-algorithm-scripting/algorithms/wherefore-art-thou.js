function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  for (let i = 0; i < collection.length; i++) {
    let isMatching = true;
    for (let prop in source) {
      if (collection[i][prop] !== source[prop]) {
        isMatching = false;
        break;
      }
    }
    if (isMatching) {
      arr.push(collection[i]);
    }
  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
