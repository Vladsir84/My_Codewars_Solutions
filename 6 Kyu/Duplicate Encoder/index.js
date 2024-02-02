// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word) {
  const wordObj = word
    .toLowerCase()
    .split("")
    .reduce((acc, el) => {
      acc[el] = acc[el] ? acc[el] + 1 : 1;
      return acc;
    }, {});
  return word
    .toLowerCase()
    .split("")
    .map((el) => (wordObj[el] === 1 ? "(" : ")"))
    .join("");
}
