// https://www.codewars.com/kata/5672682212c8ecf83e000050

function dblLinear(n) {
  const dbArr = [1];
  for (let i = 0; i < n * 10; i++) {
    let y = 2 * dbArr[i] + 1;
    let z = 3 * dbArr[i] + 1;
    dbArr.push(y);
    dbArr.push(z);
  }
  const dbArr2 = [...new Set(dbArr)].sort((a, b) => a - b);
  return dbArr2[n];
}

// u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]
// console.log(dblLinear(10));
// console.log(dblLinear(20));
// console.log(dblLinear(30));
// console.log(dblLinear(50));
// console.log(dblLinear(100));
