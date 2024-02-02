// https://www.codewars.com/kata/56541980fa08ab47a0000040

function printerError(s) {
  const arr = s.split("").filter((el) => "nopqrstuvwxyz".includes(el));
  return `${arr.length}/${s.length}`;
}

// console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));
