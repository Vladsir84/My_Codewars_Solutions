// https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
    return arr.filter((el) => el > 0).reduce((acc, el) => acc + el, 0);
  }
  
  // console.log(positiveSum([1,-4,7,12]));