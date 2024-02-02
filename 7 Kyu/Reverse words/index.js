// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

function reverseWords(str) {
  return str
    .split(" ")
    .map((el) => el.split("").reverse().join(""))
    .join(" ");
}

// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
