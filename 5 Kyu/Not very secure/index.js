// https://www.codewars.com/kata/526dbd6c8c0eb53254000110

function alphanumeric(string) {
    return string.match(/^([a-zA-Z0-9]+|\d+)$/i) ? true : false;
  }
  
  function alphanumeric(string) {
    return string.match(/^([a-zA-Z0-9]+)$/i) !== null;
  }