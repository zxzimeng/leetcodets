export function addDigits(num: number): number {
  let arrayOfDigits = Array.from(String(num), Number);
  let arrayTotal = 0;
  for (let i = 0; i < arrayOfDigits.length; i++) {
    arrayTotal += arrayOfDigits[i];
  }
  if (arrayOfDigits.length == 1) {
    let r = arrayOfDigits[0];
    console.log(r);
    return r;
  } else {
    return addDigits(arrayTotal);
  }
}
