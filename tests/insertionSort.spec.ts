// import { expect } from "chai";
// import { insertionSort, swap } from "../src/insertionSort";

// describe("insertsort", () => {
//   it("insertionSort1", () => {
//     expect(insertionSort([1, 3, 5, 2, 4, 6, 9, 8, 7])).deep.equals([
//       1,
//       2,
//       3,
//       4,
//       5,
//       6,
//       7,
//       8,
//       9,
//     ]);
//   });
//   it("insertionSort2", () => {
//     expect(insertionSort([5, 4, 3, 2, 1])).deep.equals([1, 2, 3, 4, 5]);
//   });
//   it("insertionSortRandom", () => {
//     const nums = [];
//     const sorted = [];
//     for (let i = 0; i < 10000; i++) {
//       nums[i] = i - 1000;
//       sorted[i] = i - 1000;
//     }
//     let shuffled = nums
//       .map((a) => ({ sort: Math.random(), value: a }))
//       .sort((a, b) => a.sort - b.sort)
//       .map((a) => a.value);

//     expect(insertionSort(nums)).deep.equals(sorted);
//   });

//   it("reverse sorted", () => {
//     const nums = [];
//     const sorted = [];
//     const N = 100_00;
//     for (let i = 0; i < N; i++) {
//       nums[i] = N - i;
//       sorted[i] = i + 1;
//     }
//     expect(insertionSort(nums)).deep.equals(sorted);
//   });
// });
