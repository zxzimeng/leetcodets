import { deepEqual } from "assert";
import { expect } from "chai";
import { isSymmetric, isSymmetric2, TreeNode } from "../src/p101SymmetricTree";

function newNode(
  val: number,
  left: TreeNode | null = null,
  right: TreeNode | null = null
): TreeNode {
  return new TreeNode(val, left, right);
}

describe("", () => {
  let tree = newNode(
    1,
    newNode(2, newNode(3), newNode(4)),
    newNode(2, newNode(4), newNode(3))
  );
  it("isSymmetric", () => {
    console.log("Starting Test For isSymmetric");
    let node = isSymmetric(tree);
    expect(node).true;
  });
});
