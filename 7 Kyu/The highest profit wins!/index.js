// https://www.codewars.com/kata/559590633066759614000063

function minMax(arr) {
  const minArr = arr.filter((el) => el === Math.min(...arr));
  const maxArr = arr.filter((el) => el === Math.max(...arr));
  return minArr.concat(maxArr);
}
