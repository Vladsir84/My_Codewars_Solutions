// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064

function rowSumOddNumbers(n) {
  const countArr = [];
  for (let i = 1; i <= n; i++) {
    countArr.push(i * i * i);
  }
  return countArr[countArr.length - 1];
}

// console.log(rowSumOddNumbers(42));
