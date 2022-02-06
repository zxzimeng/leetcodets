export function addBinary(a: string, b: string): string {
  let addedDec = parseInt(a, 2) + parseInt(b, 2);
  console.log(addedDec);
  return addedDec.toString(2);
}
//
