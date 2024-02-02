// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
  const arrOfStrings = s.split("").map((el, index) => el.repeat(index + 1));
  return arrOfStrings
    .map((el) => el[0].toUpperCase() + el.substring(1).toLowerCase())
    .join("-");
}

// console.log(accum("ZpglnRxqenU"));
