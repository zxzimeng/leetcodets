export function average(salary: number[]): number {
  salary.sort((a, b) => a - b);
  console.log(salary);
  salary.splice(0, 1);
  console.log(salary);

  salary.splice(-1, 1);
  console.log(salary);

  let arraryLength = salary.length;
  let totalSum = salary.reduce((a, b) => a + b, 0);
  console.log(totalSum);
  return totalSum / arraryLength;
}
