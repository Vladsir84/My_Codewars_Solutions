// https://www.codewars.com/kata/515e271a311df0350d00000f

function squareSum(numbers) {
    return numbers.map((el) => el * el).reduce((acc, el) => acc + el, 0);
  }