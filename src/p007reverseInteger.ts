import { isPrimitive } from "util";

export function reverseInteger(input: number): number {
  let numberArray = input
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
  if (+returnString < -2147483648 || +returnString > 2147483648) {
    return 0;
  }
  if (input > 0) {
    return +returnString;
  }

  if (input < 0) {
    return -reverseInteger(-input);
  }
  if (input == 0) {
    return 0;
  }
}
