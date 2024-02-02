// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(integers) {
  const evenArr = [];
  const oddArr = [];
  integers.forEach((el) => {
    el % 2 === 0 ? evenArr.push(el) : oddArr.push(el);
  });
  return evenArr.length < oddArr.length
    ? Number(evenArr.join(""))
    : Number(oddArr.join(""));
}

// console.log(findOutlier([0, 1, 2]));
