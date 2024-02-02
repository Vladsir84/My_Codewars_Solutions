// https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
    return Array.from(str)
      .filter((el) => !"aeiuoAEIUO".includes(el))
      .join("");
  }
  
  // console.log(disemvowel("This website is for losers LOL!"));