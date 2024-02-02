// https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag(str) {
  let word = str
    .split(" ")
    .filter((el) => el !== "")
    .map((el) => el.toUpperCase()[0] + el.slice(1))
    .join("");
  return word.length >= 140 || word === "" ? false : "#" + word;
}
