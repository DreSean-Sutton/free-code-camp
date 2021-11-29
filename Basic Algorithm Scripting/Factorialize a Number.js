function factorialize(num) {
  if (num < 2) {
    return 1;
  }
  return num * factorialize(num - 1);
}

//FOR LOOP VERSION OF FUNCTION BELOW

function factorialize(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}
