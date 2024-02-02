// https://www.codewars.com/kata/5282b48bb70058e4c4000fa7

function hexStringToRGB(hexString) {
  const arr = hexString.split("").splice(1);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "A" || arr[i] === "a") {
      arr[i] = "10";
    } else if (arr[i] === "B" || arr[i] === "b") {
      arr[i] = "11";
    } else if (arr[i] === "C" || arr[i] === "c") {
      arr[i] = "12";
    } else if (arr[i] === "D" || arr[i] === "d") {
      arr[i] = "13";
    } else if (arr[i] === "E" || arr[i] === "e") {
      arr[i] = "14";
    } else if (arr[i] === "F" || arr[i] === "f") {
      arr[i] = "15";
    }
  }
  return {
    r: arr[0] * 16 + Number(arr[1]),
    g: arr[2] * 16 + Number(arr[3]),
    b: arr[4] * 16 + Number(arr[5]),
  };
}

// console.log(hexStringToRGB("#FF9933"));
