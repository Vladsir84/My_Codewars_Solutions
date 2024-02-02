// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
  let counter = 0;
  while (num >= 10) {
    const arrOfDigits = Array.from(String(num), Number);
    num = arrOfDigits.reduce((acc, el) => acc * el);
    counter++;
  }
  return counter;
}

// console.log(persistence(39));
