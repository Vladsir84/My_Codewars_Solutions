// https://www.codewars.com/kata/541c8630095125aba6000c00

function digital_root(n) {
  if (n === 0) {
    return n;
  }
  let stringNum = n.toString();
  if (stringNum.length === 2) {
    let number = parseInt(stringNum[0]) + parseInt(stringNum[1]);

    return number;
  } else if (stringNum.length > 2) {
    let result = 0;
    for (let i = 0; i < stringNum.length; i++) {
      result += parseInt(stringNum[i]);
      if (result > 9) {
        let stringNums = result.toString();
        result = parseInt(stringNums[0]) + parseInt(stringNums[1]);
      }
    }
    return result;
  }
}

// console.log(digital_root(16));
// digital_root(456);

function digitalRoot(n) {
  const digArray = String(n)
    .split("")
    .map((el) => Number(el));
  let res = digArray.reduce((acc, el) => acc + el, 0);

  while (String(res).length > 1) {
    res = String(res)
      .split("")
      .map((el) => Number(el))
      .reduce((acc, el) => acc + el, 0);
  }

  return res;
}

// console.log(digitalRoot(78));
