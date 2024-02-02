// https://www.codewars.com/kata/513e08acc600c94f01000001

function rgb(r, g, b) {
    this.color =
      this.color ||
      function (n) {
        // console.log(Math.max(Math.min(n, 255), 0));
        return Math.max(Math.min(n, 255), 0);
      };
    return (
      (1 << 24) +
      (this.color(r) << 16) +
      (this.color(g) << 8) +
      this.color(b)
    )
      .toString(16)
      .slice(1)
      .toUpperCase();
  }
  
  // rgb(12, 14, 16)
  
  function rgb(r, g, b) {
  if (r < 0) {
    r = 0o0;
  }
  if (g < 0) {
    g = 0o0;
  }
  if (b < 0) {
    b = 0o0;
  }
  if (r > 255) {
    r = 255;
  }
  if (g > 255) {
    g = 255;
  }
  if (b > 255) {
    b = 255;
  }

  const colorArr = (
    String(Math.trunc(r / 16)) +
    " " +
    String(((r / 16) % 1) * 16) +
    " " +
    String(Math.trunc(g / 16)) +
    " " +
    String(((g / 16) % 1) * 16) +
    " " +
    String(Math.trunc(b / 16)) +
    " " +
    String(((b / 16) % 1) * 16)
  ).split(" ");

  for (let i = 0; i < colorArr.length; i++) {
    if (colorArr[i] === "10") {
      colorArr[i] = "A";
    } else if (colorArr[i] === "11") {
      colorArr[i] = "B";
    } else if (colorArr[i] === "12") {
      colorArr[i] = "C";
    } else if (colorArr[i] === "13") {
      colorArr[i] = "D";
    } else if (colorArr[i] === "14") {
      colorArr[i] = "E";
    } else if (colorArr[i] === "15") {
      colorArr[i] = "F";
    }
  }
  return colorArr.join("");
}

// console.log(rgb(173,255,47));
