export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
export function isSymmetric(root: TreeNode | null): boolean {
  if (root == null) {
    return true;
  }
  return isSymmetric2(root.left, root.right);
}

export function isSymmetric2(root1: TreeNode, root2: TreeNode): boolean {
  if (root1 == null && root2 == null) {
    return true;
  }
  if (root1 == null || root2 == null) {
    return false;
  }
  if (root1.val != root2.val) {
    return false;
  }
  return (
    isSymmetric2(root1.left, root2.right) &&
    isSymmetric2(root1.right, root2.left)
  );
}
