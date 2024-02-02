// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

function DNAStrand(dna) {
  const arr = dna.split("");
  const arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "A") {
      arr[i] = "T";
    } else if (arr[i] === "T") {
      arr[i] = "A";
    } else if (arr[i] === "C") {
      arr[i] = "G";
    } else if (arr[i] === "G") {
      arr[i] = "C";
    }
    arr1.push(arr[i]);
  }
  return arr1.join("");
}

// console.log(DNAStrand("AAAA"));
