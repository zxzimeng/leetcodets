export function mergeSortdArray(a, b) {
  for (var i = 0; i < b.length; i++) {
    a.push(b[i]);
  }
  //console.log(a);
  for (i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) {
        let temp = 0;
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  return a;
}

export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  let returnNum = 0;
  for (let i in nums2) {
    nums1.push(nums2[i]);
  }
  nums1.sort((a, b) => a - b);
  let mergedArray = nums1;
  if (mergedArray.length % 2 != 0) {
    let indexForSum = mergedArray.length - 1;
    returnNum = mergedArray[indexForSum / 2];
  } else {
    let indexForSum = mergedArray.length / 2;
    returnNum = (mergedArray[indexForSum] + mergedArray[indexForSum - 1]) / 2;
  }
  return returnNum;
}
