// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
    const obj = {};
    A.forEach((el) => {
      obj[el] = (obj[el] || 0) + 1;
    });
    const res = Object.entries(obj).find((el) => el[1] % 2 !== 0);
    return Number(res[0]);
  }
  
  // console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));