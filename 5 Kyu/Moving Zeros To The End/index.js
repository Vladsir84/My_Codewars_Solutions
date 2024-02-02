// https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr) {
    let arr2 = arr.filter((el) => el !== 0);
    let arr3 = arr.filter((el) => el === 0);
    for (let i = 0; i < arr3.length; i++) {
      arr2.push(arr3[i]);
    }
    return arr2;
  }
  
  // console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));