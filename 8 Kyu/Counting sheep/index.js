// https://www.codewars.com/kata/54edbc7200b811e956000556

function countSheeps(arrayOfSheep) {
    const newArr = arrayOfSheep.filter((el) => el === true);
    return newArr.length;
  }