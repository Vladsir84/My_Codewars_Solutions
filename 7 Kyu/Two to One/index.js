// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

function longest(s1, s2) {
    const str = s1 + s2;
    return str
      .split("")
      .filter((el, index) => str.indexOf(el) === index)
      .sort()
      .join("");
  }
  
  // console.log(longest("aretheyhere", "yestheyarehere"));