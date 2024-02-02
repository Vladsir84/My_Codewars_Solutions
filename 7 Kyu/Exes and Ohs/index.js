// https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
  const arrX = str
    .toLowerCase()
    .split("")
    .filter((el) => el === "x");
  const arrO = str
    .toLowerCase()
    .split("")
    .filter((el) => el === "o");
  return (
    (arrX.length === 0 && arrO.length === 0) || arrX.length === arrO.length
  );
}
