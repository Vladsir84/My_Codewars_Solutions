// https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str) {
    const newStr = str.toLowerCase();
    const set = new Set(newStr);
    return set.size === str.length;
  }
  
  // console.log(isIsogram("Dermatoglyphics"));