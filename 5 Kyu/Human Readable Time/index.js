// https://www.codewars.com/kata/52685f7382004e774f0001f7

function humanReadable(seconds) {
    let minuteTime = seconds % 3600;
    let minutes = Math.floor(minuteTime / 60);
    let second = seconds % 60;
    let hours = Math.floor(seconds / 3600);
  
    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${second < 10 ? "0" + second : second}`;
  }
  
  // console.log(humanReadable(0));
  // console.log(humanReadable(59));
  // console.log(humanReadable(60));
  // console.log(humanReadable(90));
  // console.log(humanReadable(3599));
  // console.log(humanReadable(3600));
  // console.log(humanReadable(45296));
  // console.log(humanReadable(86399));
  // console.log(humanReadable(86400));
  // console.log(humanReadable(359999));