// https://www.codewars.com/kata/54ff3102c1bad923760001f3

// function getCount(str) {
//   let vowelsCount = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'a' || 'e' || 'i' || 'o' || 'u' ) {
//       console.log(str[i]);
//       vowelsCount += i
//     }
//   }
//   return vowelsCount;
// }

function getCount(str) {
    const arr = Array.from(str).filter(
      (el) => el === "a" || el === "e" || el === "i" || el === "o" || el === "u"
    );
    return arr.length;
  }
  
  // console.log(getCount("Korea"));