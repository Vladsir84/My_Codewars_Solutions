// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

var number = function (busStops) {
  return busStops.map((el) => el[0] - el[1]).reduce((acc, el) => acc + el, 0);
};

// console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]));
