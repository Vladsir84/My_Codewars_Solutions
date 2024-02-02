// https://www.codewars.com/kata/52e88b39ffb6ac53a400022e

function int32ToIp(int32) {
  const ip1 = Math.floor(int32 / 16777216);
  const ip2 = Math.floor(
    (int32 - Math.floor(int32 / 16777216) * 16777216) / 65536
  );
  const ip3 = Math.floor((int32 - Math.floor(int32 / 65536) * 65536) / 256);
  const ip4 = int32 - Math.floor(int32 / 256) * 256;

  return `${ip1}.${ip2}.${ip3}.${ip4}`;
}

// console.log(int32ToIp(2154959208));
// console.log(int32ToIp(65537));
// console.log(int32ToIp(65791));
// console.log(int32ToIp(16777215));
// console.log(int32ToIp(2149583361));
// console.log(int32ToIp(2 ** 32 - 1));
