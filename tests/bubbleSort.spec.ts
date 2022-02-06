// import { expect } from "chai";
// import { swap, bubbleSort } from "../src/bubbleSort";

// describe("bubbleSort", () => {
//   it("bubbleSort", () => {
//     expect(bubbleSort([1, 3, 5, 2, 4, 6, 9, 8, 7])).deep.equals([
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
//   it("random", () => {
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

//     expect(bubbleSort(nums)).deep.equals(sorted);
//   });
// });
