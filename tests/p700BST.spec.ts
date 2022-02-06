import { deepEqual } from "assert";
import { expect } from "chai";
import { searchBST, TreeNode } from "../src/p700BST";

function newNode(
  val: number,
  left: TreeNode | null = null,
  right: TreeNode | null = null
): TreeNode {
  return new TreeNode(val, left, right);
}

describe("", () => {
  let tree = newNode(4, newNode(2, newNode(1), newNode(3)), newNode(7));
  it("searchBST", () => {
    console.log("Starting Test For searchBST");
    let node = searchBST(tree, 2);
    expect(node.val).equals(2);
    expect(node.left.val).equals(1);
  });
});
