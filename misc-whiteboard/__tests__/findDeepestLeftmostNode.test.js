const findDeepestLeftmostNode = require('../scripts/findDeepestLeftmostNode');
const TreeNode = require('../classes/tree.node');

/*
  // For reference
  function TreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  TreeNode.prototype.toString = function () {
    `{ val: ${this.value}, left: ${this.left}, right: ${this.right} }`
  }
*/

describe('findDeepestLeftmostNode', () => {
  /* 
  testTree1
          5
         / \
        7   8
       /   / \
      10  0   9
  */

  function generateTestTree1() {
    const testTree1 = new TreeNode(5);

    const leftNode = new TreeNode(7);
    const rightNode = new TreeNode(8);
    const leftmostNode = new TreeNode(10);
    const rightmostNode = new TreeNode(9);
    const middleNode = new TreeNode(0);

    testTree1.left = leftNode;
    testTree1.right = rightNode;
    leftNode.left = leftmostNode;
    rightNode.right = rightmostNode;
    rightNode.left = middleNode;

    return testTree1;
  }

  /* 
  testTree2
          42
           \
            36
  */

  function generateTestTree2() {
    const testTree2 = new TreeNode(42);
    const rightNode = new TreeNode(36);

    testTree2.right = rightNode;

    return testTree2;
  }

  /* 
testTree3
        5
       / \
      7   8
         / \
        0   9
*/

  function generateTestTree3() {
    const testTree3 = new TreeNode(5);

    const leftNode = new TreeNode(7);
    const rightNode = new TreeNode(8);
    const rightmostNode = new TreeNode(9);
    const leftmostNode = new TreeNode(0);

    testTree3.left = leftNode;
    testTree3.right = rightNode;
    rightNode.right = rightmostNode;
    rightNode.left = leftmostNode;

    return testTree3;
  }

  test('should return a tree node', () => {
    const testNode = new TreeNode(null);
    expect(findDeepestLeftmostNode(testNode)).toBeInstanceOf(TreeNode);
  });

  test('should return null when passed a null tree', () => {
    const nullNode = null;
    expect(findDeepestLeftmostNode(nullNode)).toBe(null);
  });

  test('should return the root node when passed a solo node', () => {
    const soloNode = new TreeNode(42);
    expect(findDeepestLeftmostNode(soloNode)).toBe(soloNode);
  });

  test('should return the leftmost node of the deepest level in a binary tree', () => {
    const testTree1 = generateTestTree1();
    const result1 = findDeepestLeftmostNode(testTree1);

    expect(result1.value).toBe(10);

    const testTree3 = generateTestTree3();
    const result3 = findDeepestLeftmostNode(testTree3);

    expect(result3.value).toBe(0);
  });

  test('should return the correct node at the deepest level', () => {
    const testTree2 = generateTestTree2();
    const result2 = findDeepestLeftmostNode(testTree2);

    expect(result2.value).toBe(36);
  });
});
