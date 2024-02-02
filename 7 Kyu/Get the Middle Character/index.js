// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s) {
    return s.length % 2 === 0
      ? s.slice((s.length - 2) / 2, (s.length + 2) / 2)
      : s.slice((s.length - 1) / 2, (s.length + 1) / 2);
  }
  
  // console.log(getMiddle("test"));