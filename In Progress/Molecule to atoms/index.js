// https://www.codewars.com/kata/52f831fa9d332c6591000511

function parseMolecule(formula) {
    const fArr = formula.split("");
    for (let i = 0; i < fArr.length; i++) {
      if (fArr[i].match(/^[a-z]/gm)) {
        fArr[i] = fArr[i - 1] + fArr[i]; // in progress
        fArr.splice(fArr[i - 1], 1);
      }
    }
    const fObj = {};
  
    for (let i = 0; i < fArr.length; i++) {
      fObj[fArr[i]] = fObj[fArr[i]] ? fObj[fArr[i]] + 1 : 1;
      if (fArr[i].match(/^[0-9]/gm)) {
        fObj[fArr[i - 1]] = fObj[fArr[i - 1]] * Number(fArr[i]);
      }
      if (fArr[i] === ")" && fArr[i + 1].match(/^[0-9]/gm)) {
        fObj[fArr[i - 1]] = fObj[fArr[i - 1]] * Number(fArr[i + 1]);
        fObj[fArr[i - 2]] = fObj[fArr[i - 2]] * Number(fArr[i + 1]);
      }
    }
  
    const fArr2 = Object.entries(fObj).filter((el) => !el[0].match(/[\[\]()\d]/));
  
    return Object.fromEntries(fArr2);
  }
  
  // console.log(parseMolecule('H2O'));
  // console.log(parseMolecule('H2H2'));
  // console.log(parseMolecule('C2H5OH'));
  // console.log(parseMolecule("Mg(OH)2"));
  // console.log(parseMolecule("K4[ON(SO3)2]2"));
  
  //   /[\[\]()\d]/  - выражение проверяющее на наличие скобок и чисел
  
  //   /[\[\]()]/g  - выражение проверяющее на наличие скобок