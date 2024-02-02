// https://www.codewars.com/kata/525f4206b73515bffb000b21

function add(a, b) {
  const bigintNumA = a + "n";
  const bigintNumB = b + "n";
  // return (parseInt(a, 10) + parseInt(b, 10)).toString();
  return (bigintNumA + bigintNumB).toString();
}

//console.log(add('63829983432984289347293874', '90938498237058927340892374089'));    // 9.100232822049192e+28
