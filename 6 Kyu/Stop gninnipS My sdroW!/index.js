// https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(string) {
  return string
    .split(" ")
    .map((el) => (el.length >= 5 ? (el = el.split("").reverse().join("")) : el))
    .join(" ");
}

// console.log(spinWords("Welcome"));
// console.log(spinWords("Hey fellow warriors"));
// console.log(spinWords("This is a test"));
// console.log(spinWords("This is another test"));
// console.log(spinWords("You are almost to the last test"));
// console.log(spinWords("Seriously this is the last one"));
