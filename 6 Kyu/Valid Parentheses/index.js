// https://www.codewars.com/kata/52774a314c2333f0a7000688

function validParentheses(parens) {
    // console.log(parens[parens.length - 1]);
    if (
      (parens[parens.length - 1] === ")" &&
        parens[0] === "(" &&
        parens.length % 2 === 0) ||
      parens.length === 0
    ) {
      return true;
    }
    return false;
  }
  
  // console.log(validParentheses("()()((()"));
  
  function validParentheses(parens) {
    let count = 0;
    for (let i = 0; i < parens.length; i++) {
      if (parens[i] === "(") count++;
      if (parens[i] === ")") count--;
      if (count < 0) return false;
    }
    return count === 0;
  }
  
  // console.log(validParentheses("()()((()"));
  
  function validParentheses(parens) {
  let counter = 0;
  const parensArr = parens.split("");
  for (let i = 0; i < parensArr.length; i++) {
    if (parensArr[i] === "(") {
      counter += 1;
    }
    if (parensArr[i] === ")") {
      counter -= 1;
    }
    if (counter < 0) return false;
  }

  return counter === 0;
}

// console.log(validParentheses("())(()"));
// console.log(validParentheses("())(()"));
