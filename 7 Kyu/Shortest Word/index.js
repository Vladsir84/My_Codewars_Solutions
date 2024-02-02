// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

function findShort(s) {
    const arrOfDigits = s.split(" ").map((el) => el.length);
    return Math.min(...arrOfDigits);
  }
  
  // console.log(findShort("bitcoin take over the world maybe who knows perhaps"));