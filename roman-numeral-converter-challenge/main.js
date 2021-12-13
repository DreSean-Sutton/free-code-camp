/*
-assign the value of an empty string to variable romanNumeral
-create a for loop that:
  a. assigns the value of num to i
  b. executes code block if i is greater than 0
  -check if i is greater than 1000 and if it is:
    += the value of 'M' to romanNumeral
    subtract i by 1000
  -else if i is equal to or greater than 900
    += the value of 'CM' to romanNumeral
    subtract i by 900
  -else if i is equal to or greater than 500
    += the value of 'D' to romanNumeral
    subtract i by 500
  -else if i is equal to or greater than 400
    += the value of 'CD' to romanNumeral
  subtract i by 400
  -else if i is equal to or greater than 100
    += the value of 'C' to romanNumeral
    subtract i by 100
  -else if i is equal to or greater than 90
    += the value of 'XC' to romanNumeral
    subtract i by 90
  -else if i is equal to or greater than 50
    += the value of 'L' to romanNumeral
    subtract i by 50
  -else if i is equal to or greater than 40
    += the value of 'XL' to romanNumeral
  -else if i is equal to or greater than 10
    += the value of 'X' to romanNumeral
    subtract i by 10
  -else if i is equal to or greater than 9
    += the value of 'IX' to romanNumeral
    subtract i by 9
  -else if i is equal to or greater than 5
    += the value of 'V' to romanNumeral
    subtract i by 5
  -else if i is equal to or greater than 4
    += the value of 'IV' to romanNumeral
    subtract i by 4
  -else if i is equal to or greater than 1
    += the value of 'I' to romanNumeral
    subtract i by 1
-return romanNumeral from the function
*/

function convertToRoman(num) {
  let romanNumeral = '';

  for(let i = num; i > 0;) {
    if (i >= 1000) {
      romanNumeral += 'M';
      i -= 1000;
    }  else if (i >= 900) {
      romanNumeral += 'CM';
      i -= 900;
    } else if (i >= 500) {
      romanNumeral += 'D';
      i -= 500;
    } else if (i >= 400) {
      romanNumeral += 'CD';
      i -= 400;
    } else if (i >= 100) {
      romanNumeral += 'C';
      i -= 100;
    } else if (i >= 90) {
      romanNumeral += 'XC';
      i -= 90;
    } else if (i >= 50) {
      romanNumeral += 'L';
      i -= 50;
    } else if (i >= 40) {
      romanNumeral += 'XL';
      i -= 40;
    } else if (i >= 10) {
      romanNumeral += 'X';
      i -= 10;
    } else if (i >= 9) {
      romanNumeral += 'IX';
      i -= 9;
    } else if (i >= 5) {
      romanNumeral += 'V';
      i -= 5;
    } else if (i >= 4) {
      romanNumeral += 'IV';
      i -= 4;
    } else if (i >= 1) {
      romanNumeral += 'I';
      i -= 1;
    }
  }
    return romanNumeral
}

convertToRoman(36);
