// https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
    return b.length === 0 ? a : a.filter((el) => !b.includes(el));
  }
  
  // console.log(arrayDiff([-14,-7,7,17,10,2], [-14,-7]));