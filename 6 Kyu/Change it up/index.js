// https://www.codewars.com/kata/58039f8efca342e4f0000023

function changer(str) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const strArr = str
      .split("")
      .map((el) => {
        const strIndex = letters.indexOf(el) + 1;
        return strIndex ? letters[strIndex % letters.length] : el;
      })
      .map((el) =>
        "AaEeIiOoUu".includes(el)
          ? (el = el.toUpperCase())
          : (el = el.toLowerCase())
      );
    return strArr.join("");
  }
  
  // console.log(changer('Cat30'));
  // console.log(changer('Alice'));
  // console.log(changer('sponge1'));
  // console.log(changer('Hello World'));
  // console.log(changer('dogs'));
  // console.log(changer('z'));