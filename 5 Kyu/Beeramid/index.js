// https://www.codewars.com/kata/51e04f6b544cf3f6550000c1

var beeramid = function (bonus, price) {
  let n = Math.floor(bonus / price);
  const beerArray = [];
  let result = 0;

  for (let i = 0; i < n; i++) {
    result += (i + 1) * (i + 1);
    if (result <= n) {
      beerArray.push((i + 1) * (i + 1));
    }
  }

  return beerArray.length;
};
