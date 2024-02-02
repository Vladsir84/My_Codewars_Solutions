// https://www.codewars.com/kata/5267faf57526ea542e0007fb

Math.round = function (number) {
  if (!number) {
    return 0;
  }
  const arrNumber = String(number).split("");
  if (arrNumber.length === 1) {
    return number;
  }
  const fraction = String(number).split(".")[1][0];
  return fraction < 5 ? parseInt(number) : parseInt(number + 1);
};

Math.ceil = function (number) {
  if (!number) {
    return 0;
  }
  const arrNumber = String(number).split("");
  if (arrNumber.length === 1) {
    return number;
  }
  return parseInt(number + 1);
};

Math.floor = function (number) {
  if (!number) {
    return 0;
  }
  return parseInt(number);
};
