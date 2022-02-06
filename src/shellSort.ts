export function swap(sortingArray: number[], a: number, b: number) {
  [sortingArray[b], sortingArray[a]] = [sortingArray[a], sortingArray[b]];
  return;
}
export function sweep(nums: number[], k: number, gap: number) {
  for (let j = k; j >= gap; j -= gap) {
    if (nums[j] < nums[j - gap]) {
      swap(nums, j, j - gap);
    } else {
      break;
    }
  }
}
export function shellSort(nums: number[]): number[] {
  let intervals: number[] = [];
  for (let i = nums.length; i > 0; i = Math.floor(i / 3)) {
    intervals.push(i);
  }
  // console.log(intervals);
  for (let gap of intervals) {
    for (let k = 1; k < nums.length; k++) {
      sweep(nums, k, gap);
    }
  }
  return nums;
}
