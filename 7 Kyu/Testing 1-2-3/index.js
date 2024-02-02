// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

var number = function (array) {
  const newObj = Object.assign({}, array);
  const objToArr = Object.entries(newObj);
  const newArr = [];
  for (let i = 0; i < objToArr.length; i++) {
    newArr.push(`${+objToArr[i][0] + 1}: ${objToArr[i][1]}`);
  }
  return newArr;
};

// console.log(number(["a", "b", "c"]));
