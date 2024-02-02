// not from codewars but it was on live coding

const findMaxSymbols = (str) => {
  const arrOfDigits = str.split("");
  const objOfDigits = {};
  for (let i = 0; i < arrOfDigits.length; i++) {
    objOfDigits[arrOfDigits[i]] = objOfDigits[arrOfDigits[i]]
      ? objOfDigits[arrOfDigits[i]] + 1
      : 1;
    console.log(objOfDigits);
  }

  return Math.max(...Object.values(objOfDigits));
};

// console.log(findMaxSymbols("abracadabra"));

const findMaxSymbols2 = (str) => {
  return Math.max(
    ...Object.values(
      str.split("").reduce((acc, el) => {
        acc[el] = acc[el] ? acc[el] + 1 : 1;
        return acc;
      }, {})
    )
  );
};

const findMaxSymbols3 = (str) => {
  const objOfDigits = str.split("").reduce((acc, el) => {
    acc[el] = acc[el] ? acc[el] + 1 : 1;
    return acc;
  }, {});
  let letter;
  let counter = 0;
  for (let i in objOfDigits) {
    console.log(objOfDigits[i]);
    if (counter < objOfDigits[i]) {
      counter = objOfDigits[i];
      letter = i;
    }
  }
  return letter;
};

// console.log(findMaxSymbols("abracadabra"));
// console.log(findMaxSymbols3("abracadabrazzzzzzzzzzzzzzzzzzz"));

// *****************************************************************************************************

const first = [1, 2, 3, 4];
const second = [3, 4, 5, 6];

function intersection(a, b) {
  const res = a.concat(b);
  const uniqueValues = new Set();
  const res2 = [];
  res.forEach((el) => {
    if (uniqueValues.has(el)) {
      res2.push(el);
    } else {
      uniqueValues.add(el);
    }
  });
  return res2;
}

console.log(intersection(first, second));

