// https://www.codewars.com/kata/56269eb78ad2e4ced1000013

function findNextSquare(sq) {
  let sqrt = Math.sqrt(sq) + 1;
  return sqrt % 1 === 0 ? sqrt ** 2 : -1;
}
