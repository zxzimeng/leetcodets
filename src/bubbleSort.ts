export function swap(sortingArray: number[], a: number, b: number) {
  let temp = sortingArray[a];
  sortingArray[a] = sortingArray[b];
  sortingArray[b] = temp;
  return;
}
export function bubbleSort(toBeSorted: number[]): any {
  const L = toBeSorted.length;
  for (let x in toBeSorted) {
    for (let i = 0; i < L; i++) {
      if (toBeSorted[i] > toBeSorted[i + 1]) {
        swap(toBeSorted, i, i + 1);
      }
    }
  }
  return toBeSorted;
}
