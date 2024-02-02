// https://www.codewars.com/kata/5813d19765d81c592200001a

function dontGiveMeFive(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
      if (!/5/.test(i)) {
        arr.push(i);
      }
    }
    return arr.length;
  }
  
  // console.log(dontGiveMeFive(4,17));