// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

function century(year) {
    const str = year.toString();
    console.log(str[str.length - 1]);
  }
  
  // console.log(century(1705));
  
  
  function century(year) {
  // let centuryCount = Array.from(String(year), Number).slice(0, 2).join('');

  let centuryCount = Array.from(String(year), Number);
  let centuryCountDigit = centuryCount
    .filter((el, index) => index < centuryCount.length - 2)
    .join("");
  // console.log(centuryCountDigit);

  let yearString = String(year);
  if (year < 100) {
    return 1;
  } else if (
    yearString[yearString.length - 1] === "0" &&
    yearString[yearString.length - 2] === "0"
  ) {
    return Number(centuryCountDigit);
  }
  return Number(centuryCountDigit) + 1;
}

// console.log(century(173960));
