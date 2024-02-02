// https://www.codewars.com/kata/56548dad6dae7b8756000037

function WhatIsTheTime(timeInMirror) {
    const timeArr = timeInMirror.split(":");
    let res1 = 11 - timeArr[0];
    let res2 = 60 - timeArr[1];
  
    if (res2 < 10) {
      res2 = "0" + res2;
    }
    if (res2 === 60) {
      res2 = "00";
      res1 = 12 - timeArr[0];
    }
    if (res1 <= 0) {
      res1 = 12 + Number(res1);
    }
    if (res1 < 10) {
      res1 = "0" + res1;
    }
    return `${res1}:${res2}`;
  }
  
  // console.log(WhatIsTheTime("06:35"));
  // console.log(WhatIsTheTime("11:59"));
  // console.log(WhatIsTheTime("12:02"));
  // console.log(WhatIsTheTime("04:00"));
  // console.log(WhatIsTheTime("06:00"));
  // console.log(WhatIsTheTime("00:14"));