// https://www.codewars.com/kata/578553c3a1b8d5c40300037c

const binaryArrayToNumber = (arr) => {
  let str = arr.join("");
  return parseInt(str, 2);
};

// console.log(binaryArrayToNumber([0,0,1,0]));
