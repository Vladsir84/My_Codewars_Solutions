// https://www.codewars.com/kata/5412509bd436bd33920011bc;

function maskify(cc) {
    if (cc.length < 5) {
      return cc;
    }
  
    let str = "";
    for (let i = 0; i < cc.length - 4; i++) {
      str += cc[i];
    }
    return (
      str
        .split("")
        .map((el) => (el = "#"))
        .join("") +
      cc[cc.length - 4] +
      cc[cc.length - 3] +
      cc[cc.length - 2] +
      cc[cc.length - 1]
    );
  }
  
  // console.log(maskify("4556364607935616"));