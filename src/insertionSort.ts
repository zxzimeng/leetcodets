export function swap(sortingArray: number[], a: number, b: number) {
  [sortingArray[b], sortingArray[a]] = [sortingArray[a], sortingArray[b]];
  return;
}
export function sweep(nums: number[], k: number) {
  for (let j = k; j > 0; j--) {
    if (nums[j] < nums[j - 1]) {
      swap(nums, j, j - 1);
    } else {
      break;
    }
  }
}
export function insertionSort(nums: number[]): number[] {
  nums = nums
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
  for (let k = 1; k < nums.length; k++) {
    sweep(nums, k);
  }
  return nums;
}
