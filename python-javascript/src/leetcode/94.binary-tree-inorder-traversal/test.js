import { inorderTraversal, TreeNode } from ".";

test("binary tree inorder traversal", () => {
  // given
  const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, null), null));

  // when & then
  expect(inorderTraversal(root)).toEqual([1, 3, 2]);
});

test("binary tree inorder traversal with Empty Tree", () => {
  // given
  const root = new TreeNode(null, null, null);

  // when & then
  expect(inorderTraversal(root)).toEqual([]);
});
