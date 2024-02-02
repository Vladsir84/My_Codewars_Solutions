// https://www.codewars.com/kata/540954232a3259755d000039

function fridayTheThirteenths(start, end) {
    if (!end) {
      end = start;
    }
    let res = "";
    for (let i = start; i <= end; i++) {
      for (let j = 0; j < 12; j++) {
        let friday = new Date(i, j, 13);
        if (friday.getDay() === 5) {
          res +=
            `${
              friday.getMonth() + 1
            }/${friday.getDate()}/${friday.getFullYear()}` + " ";
        }
      }
    }
    return res
      .split(" ")
      .filter((el) => el !== "")
      .join(" ");
  }
  
  // console.log(fridayTheThirteenths(1999, 2000));
  // console.log(fridayTheThirteenths(2000));