// https://www.codewars.com/kata/558fc85d8fd1938afb000014

// function sumTwoSmallestNumbers(numbers) {
//  const minElem = Math.min(...numbers);
//  const arrWithoutMin = numbers.filter(el => el !== minElem);
//  const almostMinElem = Math.min(...arrWithoutMin);
//  return minElem + almostMinElem;
// }

function sumTwoSmallestNumbers(numbers) {
    const arr = numbers.sort((a, b) => a - b);
    return arr[0] + arr[1];
  }
  
  // console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));