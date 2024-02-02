// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

function solution(list) {
  // let start;
  // let end;
  // let rez;
  const arr = [];
  for (let i = 0; i <= list.length - 1; i++) {
    let rez = list[i + 1] - list[i];
    if (rez === 1) {
      arr.push(list[i]);
    }

    // console.log(list[i] + list[i + 1]);
  }
  // return list;
  return arr;
}

// console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));

function solution(list) {
  const newArr = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] - list[i - 1] === 1) {
      newArr.push(list[i - 1]);
      newArr.push(list[i]);
      // console.log(list[i]);                                   
    }
  }
  const newArr2 = [...new Set(newArr)];
  //  for(let j = 0; j < newArr2.length; j++) {
  //   while (newArr2[j] - newArr2[j - 1] === 1) {
  //     newArr2.splice(newArr2[j], 1)
  //     break
  //   }

  //  }

  return newArr2;
}

// console.log(
//   solution([
//     -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
//   ])
// );

