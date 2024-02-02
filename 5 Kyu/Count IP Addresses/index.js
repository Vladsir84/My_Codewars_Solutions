// https://www.codewars.com/kata/526989a41034285187000de4

function ipsBetween(start, end) {
  const arrStart = start.split(".").map((el) => Number(el));
  const arrEnd = end.split(".").map((el) => Number(el));

  const numberStart =
    arrStart[0] * 16777216 +
    arrStart[1] * 65536 +
    arrStart[2] * 256 +
    arrStart[3];
  const numberEnd =
    arrEnd[0] * 16777216 + arrEnd[1] * 65536 + arrEnd[2] * 256 + arrEnd[3];

  return Math.abs(numberStart - numberEnd);
}

// console.log(ipsBetween("150.0.0.0", "150.0.0.1"));
// console.log(ipsBetween("10.0.0.0", "10.0.0.50"));
// console.log(ipsBetween("20.0.0.10", "20.0.1.0"));
// console.log(ipsBetween("10.11.12.13", "10.11.13.0"));
// console.log(ipsBetween("160.0.0.0", "160.0.1.0"));
// console.log(ipsBetween("170.0.0.0", "170.1.0.0"));
// console.log(ipsBetween("50.0.0.0", "50.1.1.1"));
// console.log(ipsBetween("180.0.0.0", "181.0.0.0"));
// console.log(ipsBetween("1.2.3.4", "5.6.7.8"));
// console.log(ipsBetween("0.0.0.0", "255.255.255.255"));
