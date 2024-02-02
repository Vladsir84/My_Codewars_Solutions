// https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num) {
    const arr = Array.from(String(num), Number).map((el) => el * el);
    return Number(arr.join(""));
  }
  
  // console.log(squareDigits(3212));