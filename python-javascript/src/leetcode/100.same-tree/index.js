/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
export var isSameTree = function (p, q) {
  const stackP = [];
  const stackQ = [];

  const preTraversal = function (node, stack) {
    if (!node) {
      stack.push(0);
      return;
    }

    stack.push(node.val);
    preTraversal(node.left, stack);
    preTraversal(node.right, stack);
  };
  preTraversal(p, stackP);
  preTraversal(q, stackQ);

  let index = 0;
  while (stackP[index] != null || stackQ[index] != null) {
    console.log(stackP[index], stackQ[index]);
    if (stackP[index] !== stackQ[index]) {
      return false;
    }
    index++;
  }

  return true;
};

export class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
