// https://www.codewars.com/kata/566fc12495810954b1000030

function nbDig(n, d) {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(i ** 2);
  }
  const k = arr
    .map((el) => String(el))
    .join("")
    .split("")
    .filter((el) => String(d).includes(el));
  return k.length;
}

// console.log(nbDig(5750, 0));
