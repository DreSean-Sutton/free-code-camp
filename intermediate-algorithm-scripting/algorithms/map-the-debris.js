function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let somethingRidiculous = null;
  for (let key in arr) {
    somethingRidiculous = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[key].avgAlt, 3) / GM))
    arr[key].orbitalPeriod = somethingRidiculous
    delete arr[key].avgAlt
  }
  return arr;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
