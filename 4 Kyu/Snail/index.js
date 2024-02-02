// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

snail = function (array) {
  const arr = [];
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i].length === 0) {
      return [];
    }
    arr.push(array[0][i]);
  }
  if (array.length > 1) {
    let counter = 0;

    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 1 + counter; j <= array.length - (1 + counter); j++) {
        arr.push(array[j][array.length - (1 + counter)]);
      }
      const newArr = array[array.length - (1 + counter)];

      for (let j = newArr.length - (2 + counter); j >= 1 + counter; j--) {
        arr.push(newArr[j]);
      }

      for (let j = array.length - (1 + counter); j >= 1 + counter; j--) {
        arr.push(array[j][0 + counter]);
      }

      const newArr2 = array[1 + counter];
      for (let j = 1 + counter; j <= newArr2.length - (2 + counter); j++) {
        arr.push(newArr2[j]);
      }
      counter++;
    }
  }
  return arr;
};

// console.log(
//   snail([
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20],
//     [21, 22, 23, 24, 25],
//   ])
// );

// console.log(
//   snail([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// console.log(
//   snail([
//     [1, 2, 3, 4, 5, 6],
//     [20, 21, 22, 23, 24, 7],
//     [19, 32, 33, 34, 25, 8],
//     [18, 31, 36, 35, 26, 9],
//     [17, 30, 29, 28, 27, 10],
//     [16, 15, 14, 13, 12, 11],
//   ])
// );
