// https://www.codewars.com/kata/51b6249c4612257ac0000005

function solution(roman) {
    const romanArr = roman.split("").map((el) => {
      switch (el) {
        case "I":
          return 1;
        case "V":
          return 5;
        case "X":
          return 10;
        case "L":
          return 50;
        case "C":
          return 100;
        case "D":
          return 500;
        case "M":
          return 1000;
      }
    });
  
    for (let i = 0; i < romanArr.length; i++) {
      if (romanArr[i] < romanArr[i + 1]) {
        romanArr[i] = -romanArr[i];
      }
    }
  
    return romanArr.reduce((acc, el) => acc + el, 0);
  }
  
  // console.log(solution("XXI"));
  // console.log(solution("I"));
  // console.log(solution("IV"));
  // console.log(solution("MMVIII"));
  // console.log(solution("MDCLXVI"));