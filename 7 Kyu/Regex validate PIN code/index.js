// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

function validatePIN(pin) {
  const regTest = pin.split(" ");
  //const regAnswer = new RegExp("^[+]?([0-9]*[.,])?[0-9]+$");
  const regAnswer = new RegExp("^([0-9])?[0-9]+$");
  if (regAnswer.test(regTest)) {
    return regTest.join("").length === 4 || regTest.join("").length === 6;
  }

  return false;
}

// console.log(validatePIN("a234"));
