// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88

function add(n) {
  function sumFunc(m) {
    return add(n + m);
  }

  sumFunc.valueOf = function () {
    return n;
  };
  return sumFunc;
}

// console.log(add(1)(2));
