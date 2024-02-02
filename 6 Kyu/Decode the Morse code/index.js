// https://www.codewars.com/kata/54b724efac3d5402db00065e

decodeMorse = function (morseCode) {
  return morseCode
    .trim()
    .split(" ")
    .map((el) => {
      switch (el) {
        case ".-":
          return "A";
        case "-...":
          return "B";
        case "-.-.":
          return "C";
        case "-..":
          return "D";
        case ".":
          return "E";
        case "..-.":
          return "F";
        case "--.":
          return "G";
        case "....":
          return "H";
        case "..":
          return "I";
        case ".---":
          return "J";
        case "-.-":
          return "K";
        case ".-..":
          return "L";
        case "--":
          return "M";
        case "-.":
          return "N";
        case "---":
          return "O";
        case ".--.":
          return "P";
        case "--.-":
          return "Q";
        case ".-.":
          return "R";
        case "...":
          return "S";
        case "-":
          return "T";
        case "..-":
          return "U";
        case "...-":
          return "V";
        case ".--":
          return "W";
        case "-..-":
          return "X";
        case "-.--":
          return "Y";
        case "--..":
          return "Z";
        case "...---...":
          return "SOS";
        case "":
          return " ";
        case "-.-.--":
          return "!";
        case "..--..":
          return "?";
        case ".-.-.-":
          return ".";
        default:
          return " ";
      }
    })
    .join("")
    .split(" ")
    .map((el) => (el === "" ? (el = " ") : el))
    .join("");
};

// console.log(decodeMorse('   .... . -.--   .--- ..- -.. .   '));
