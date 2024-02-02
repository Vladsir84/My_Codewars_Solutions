// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

function abbrevName(name) {
    return name
      .split(/(\s+)/)
      .filter((el) => !el.includes(" "))
      .map((el) => el[0])
      .join(".")
      .toUpperCase();
  }
  
  // console.log(abbrevName("Sam Harris"));