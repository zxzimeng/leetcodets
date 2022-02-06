// import { expect } from "chai";
// import { shellSort, sweep, swap } from "../src/shellSort";

// describe("shellSort1", () => {
//   it("shellSort1", () => {
//     expect(shellSort([1, 3, 5, 2, 4, 6, 9, 8, 7])).deep.equals([
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
//   it("shellSort2", () => {
//     expect(shellSort([5, 4, 3, 2, 1])).deep.equals([1, 2, 3, 4, 5]);
//   });
//   it("shellSort3", () => {
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

//     expect(shellSort(nums)).deep.equals(sorted);
//   });

//   it("shellSortMaster", () => {
//     const nums = [];
//     const sorted = [];
//     const N = 100_000_0;
//     for (let i = 0; i < N; i++) {
//       nums[i] = N - i;
//       sorted[i] = i + 1;
//     }
//     expect(shellSort(nums)).deep.equals(sorted);
//   });
// });
