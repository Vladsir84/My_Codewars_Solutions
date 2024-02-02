// https://www.codewars.com/kata/55d24f55d7dd296eb9000030

// var summation = function (num) {
//   console.log(Array.from(Array(num)));
//   return Array.from(Array(num)).map((el,index) => index+1).reduce((acc, el) => acc + el, 0);
// }

var summation = function (num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
      result.push(i);
    }
    return result.reduce((acc, el) => acc + el, 0);
  };
  
  // console.log(summation(8));