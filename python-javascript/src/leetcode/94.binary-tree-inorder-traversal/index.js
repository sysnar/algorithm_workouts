/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

export const inorderTraversal = function (root) {
  const stack = [];

  function recursion(root) {
    if (root == null || root.val == null) {
      return;
    }

    recursion(root.left);
    stack.push(root.val);
    recursion(root.right);
  }
  recursion(root);

  return stack;
};

export class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
