// https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr) {
  const res = [];
  const directionObject = {
    SOUTH: "NORTH",
    NORTH: "SOUTH",
    WEST: "EAST",
    EAST: "WEST",
  };
  for (let i = 0; i < arr.length; i++) {
    if (res[res.length - 1] === directionObject[arr[i]]) {
      res.pop();
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

// console.log(
//   dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
// );
// console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
// console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
// console.log(
//   dirReduc([
//     "EAST",
//     "EAST",
//     "WEST",
//     "NORTH",
//     "WEST",
//     "EAST",
//     "EAST",
//     "SOUTH",
//     "NORTH",
//     "WEST",
//   ])
// );
// console.log(
//   dirReduc([
//     "EAST",
//     "WEST",
//     "SOUTH",
//     "NORTH",
//     "EAST",
//     "SOUTH",
//     "EAST",
//     "WEST",
//     "NORTH",
//     "SOUTH",
//   ])
// );
