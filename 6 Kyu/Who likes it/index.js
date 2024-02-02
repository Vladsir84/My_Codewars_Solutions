// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

function likes(names) {
    switch (names.length) {
      case 0:
        return "no one likes this";
      case 1:
        return `${names[0]} likes this`;
      case 2:
        return `${names[0]} and ${names[1]} like this`;
      case 3:
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
  
  // console.log(likes([]));
  // console.log(likes(["Bob"]));
  // console.log(likes(["Bob", "Tom"]));
  // console.log(likes(["Bob", "Tom", "Pete"]));