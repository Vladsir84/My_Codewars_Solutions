// https://www.codewars.com/kata/55f2b110f61eb01779000053

function getSum(a, b) {
    if (a < b) {
      let result = 0;
      for (let i = a; i <= b; i++) {
        result += i;
      }
      return result;
    } else if (b <= a) {
      let result = 0;
      for (let i = b; i <= a; i++) {
        result += i;
      }
      return result;
    }
  }