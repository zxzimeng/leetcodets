export function twoSum(nums: number[], target: number): number[] {
  let cloneArray = [...nums];
  let sortedArray = cloneArray.sort((n1, n2) => n1 - n2);
  let begin = 0;
  let end = nums.length - 1;
  while (begin < end) {
    let sum = sortedArray[begin] + sortedArray[end];
    if (sum == target) {
      console.log(
        nums.indexOf(sortedArray[begin]),
        nums.indexOf(sortedArray[end])
      );
      return [
        nums.indexOf(cloneArray[begin]),
        nums.lastIndexOf(cloneArray[end]),
      ];
    }
    if (sum < target) {
      begin += 1;
    } else {
      end -= 1;
    }
  }
  return [];
}
