/*
-create a variable named isTruthy and assign it the value of true
-create a loop that checks for key in collection
  -if collection[key][pre] is not true
    assign the value of false to isTruthy
    break the loop
-return isTruthy
*/

function truthCheck(collection, pre) {
  let isTruthy = true;
  for (let key in collection) {
    if (!collection[key][pre]) {
      isTruthy = false;
      break;
    }
  }
  return isTruthy
}

console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male", "age": 0 }, { "user": "Dipsy", "sex": "male", "age": 3 }, { "user": "Laa-Laa", "sex": "female", "age": 5 }, { "user": "Po", "sex": "female", "age": 4 }], "age"));
