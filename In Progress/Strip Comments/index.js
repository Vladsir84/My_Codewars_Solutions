// https://www.codewars.com/kata/51c8e37cee245da6b40000bd

function solution(input, markers) {
  return input.replace(new RegExp(`\\s*[${markers.join("|")}].+`, "g"), "");
}

// console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]));
