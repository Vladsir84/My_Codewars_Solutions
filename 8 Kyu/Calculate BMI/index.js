// https://www.codewars.com/kata/57a429e253ba3381850000fb

function bmi(weight, height) {
  const bmiParam = weight / (height * height);
  if (bmiParam <= 18.5) {
    return "Underweight";
  } else if (bmiParam <= 25.0) {
    return "Normal";
  } else if (bmiParam <= 30.0) {
    return "Overweight";
  } else if (bmiParam > 30.0) {
    return "Obese";
  }
}

// console.log(bmi(106, 1.85));
