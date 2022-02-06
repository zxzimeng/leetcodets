export function isPalindrome(x: number): boolean {
  let numberArray = x
    .toString(10)
    .split("")
    .map(function (t) {
      return parseInt(t);
    });

  let returnArray = [];
  for (let i in numberArray) {
    returnArray.unshift(numberArray[i]);
  }

  let returnString = returnArray.join("");
  console.log(returnString);
  if (+returnString == x) {
    return true;
  } else {
    return false;
  }
}
