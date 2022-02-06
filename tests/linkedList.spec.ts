// import { expect } from "chai";
// import { link } from "fs";
// import { LinkedList, Node } from "../src/linkedList";

// describe("linkedListTesting", () => {
//   it.only("empty", () => {
//     let linked = new LinkedList();
//     expect(linked.toString()).deep.equals("");
//   });
//   it.only("oneNode", () => {
//     let linked = new LinkedList();
//     linked.prepend(10);
//     expect(linked.toString()).deep.equals("10");
//   });
//   it.only("twoNodes", () => {
//     let linked = new LinkedList();
//     linked.prepend(10);
//     linked.prepend(11);
//     expect(linked.toString()).deep.equals("11,10");
//   });
//   it.only("threeNodes", () => {
//     let linked = new LinkedList();
//     linked.prepend(10);
//     linked.prepend(11);
//     linked.prepend(12);

//     expect(linked.toString()).deep.equals("12,11,10");
//   });
//   it.only("hundredNodes", () => {
//     let linked = new LinkedList();
//     let testArray = [];
//     for (let i = 0; i < 100_000_000; i++) {
//       testArray.push(i);
//       linked.prepend(i);
//     }
//     expect(linked.toString()).deep.equals(testArray.reverse().join(","));
//   });
// });
