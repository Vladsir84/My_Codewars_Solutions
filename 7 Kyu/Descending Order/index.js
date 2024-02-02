// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

function descendingOrder(n) {
    const arrOfDigits = Array.from(String(n), Number);
    const sortedValue = arrOfDigits.sort((a, b) => b - a);
    return Number(sortedValue.join(""));
  }
  
  // console.log(descendingOrder(42145));