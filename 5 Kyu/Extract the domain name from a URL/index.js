// https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url) {
    // /(https?:\/\/)?(www\.)?/
    // const regexp = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g;
    const regexp = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)/g;
    const arr = url.match(regexp);
    if (arr[0] === "www.") {
      return arr[1]
        .split("")
        .filter((el) => el !== ".")
        .join("");
    }
    return arr[0]
      .split("")
      .filter((el) => el !== ".")
      .join("");
  }
  
  // console.log(domainName("www.xakep.ru"));
  // console.log(domainName("http://google.co.jp"));
  // console.log(domainName("https://youtube.com"));
  // console.log(domainName("http://www.lp4yedvy8c-xydq06g.co/default.html"));
  // console.log(domainName("http://8kuy2dmkcoa1eym2rqko0pp.co.za/default.html"));