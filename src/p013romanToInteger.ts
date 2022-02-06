export function romanToInt(s: string): number {
  const occurrencesOf = (number, numbers) =>
    numbers.reduce(
      (counter, currentNumber) =>
        number === currentNumber ? counter + 1 : counter,
      0
    );
  let romanArray = s.split("");
  let returnValue = 0;
  returnValue += occurrencesOf("I", romanArray);
  returnValue += occurrencesOf("V", romanArray) * 5;
  returnValue += occurrencesOf("X", romanArray) * 10;
  returnValue += occurrencesOf("L", romanArray) * 50;
  returnValue += occurrencesOf("C", romanArray) * 100;
  returnValue += occurrencesOf("D", romanArray) * 500;
  returnValue += occurrencesOf("M", romanArray) * 1000;

  console.log(occurrencesOf("I", romanArray));
  return returnValue;
}
