function bin2dec(num) {
  return num
    .split("")
    .reverse()
    .reduce(function (x, y, i) {
      return y === "1" ? x + Math.pow(2, i) : x;
    }, 0);
}

function addBinary(a: string, b: string): string {
  let firstInt = bin2dec(a);
  let secondInt = bin2dec(b);
  let r = firstInt + secondInt;
  let r1 = r.toString();
  return r;
}

console.log(addBinary("1100100", "1100100"));
