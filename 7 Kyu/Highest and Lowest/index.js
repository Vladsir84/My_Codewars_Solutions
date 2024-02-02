// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers) {
    const arrOfDigits = numbers.split(" ");
    return `${Math.max(...arrOfDigits)} ${Math.min(...arrOfDigits)}`;
  }
  
  // console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));