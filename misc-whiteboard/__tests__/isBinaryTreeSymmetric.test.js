const isBinaryTreeSymmetric = require('../scripts/isBinaryTreeSymmetric');
const TreeNode = require('../classes/tree.node');

describe('Symmetric Binary Tree', () => {

  /* 
  testTree1
            5
           / \
          7   7
         /     \
        9       9
  */

  function generateTestTree1() {
    const testTree1 = new TreeNode(5);

    const leftNode = new TreeNode(7);
    const rightNode = new TreeNode(7);
    const leftmostNode = new TreeNode(9);
    const rightmostNode = new TreeNode(9)

    testTree1.left = leftNode;
    testTree1.right = rightNode;
    leftNode.left = leftmostNode;
    rightNode.right = rightmostNode;

    return testTree1;
  }

  /* 
  testTree2
            5
           / \
          7   7
         /   /
        9   9
  */

  function generateTestTree2() {
    const testTree2 = new TreeNode(5);

    const leftNode = new TreeNode(7);
    const rightNode = new TreeNode(7);
    const leftmostNode = new TreeNode(9);
    const rightmostNode = new TreeNode(9)

    testTree2.left = leftNode;
    testTree2.right = rightNode;
    leftNode.left = leftmostNode;
    rightNode.left = rightmostNode; // not anymore!

    return testTree2;
  }

  const nullTree = new TreeNode(null);
  const soloTree = new TreeNode(42)
  const testTree1 = generateTestTree1();
  const testTree2 = generateTestTree2();

  test('returns a boolean value', () => {
    expect(typeof isBinaryTreeSymmetric(testTree1)).toBe('boolean');
  });

  test('returns true for a symmetric binary tree', () => {
    expect(isBinaryTreeSymmetric(testTree1)).toBe(true);
  });

  test('returns false for a non-symmetric binary tree', () => {
    expect(isBinaryTreeSymmetric(testTree2)).toBe(false);
  });

  test('returns true for a null binary tree', () => {
    expect(isBinaryTreeSymmetric(nullTree)).toBe(true);
  });

  test('returns true for a single node', () => {
    expect(isBinaryTreeSymmetric(soloTree)).toBe(true);
  });
})
