// https://www.codewars.com/kata/544aed4c4a30184e960010f4

function divisors(integer) {
    const arr = [];
    for (let i = 2; i < integer; i++) {
      arr.push(i);
    }
    const resArr = arr.filter((el) => integer % el === 0);
    return resArr.length !== 0 ? resArr : `${integer} is prime`;
  }
  
  // console.log(divisors(13));