// https://www.codewars.com/kata/563f037412e5ada593000114

function calculateYears(principal, interest, tax, desired) {
  let counter = 0;

  while (principal < desired) {
    let amount = principal * interest - principal * interest * tax;
    principal = principal + amount;
    counter += 1;
  }
  return counter;
}

// console.log(calculateYears(1000, 0.05, 0.18, 1100));
