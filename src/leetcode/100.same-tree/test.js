import { isSameTree, TreeNode } from ".";

test("if binary tree structurally identical return true", () => {
  // given
  const binaryTree = new TreeNode(1, new TreeNode(2, null, null), new TreeNode(3, null, null));

  // when & then
  expect(isSameTree(binaryTree, binaryTree)).toBeTruthy();
});

test("if binary tree structurally difference return false", () => {
  // given
  const binaryTree1 = new TreeNode(1, new TreeNode(2, null, null), new TreeNode(3, null, null));
  const binaryTree2 = new TreeNode(1, new TreeNode(3, null, null), new TreeNode(2, null, null));

  // when & then
  expect(isSameTree(binaryTree1, binaryTree2)).toBeFalsy();
});

test("if binary tree has difference like null return false", () => {
  // given
  const binaryTree1 = new TreeNode(1, new TreeNode(2, null, null), new TreeNode(3, null, null));
  const binaryTree2 = new TreeNode(1, null, null);

  // when & then
  expect(isSameTree(binaryTree1, binaryTree2)).toBeFalsy();
});
