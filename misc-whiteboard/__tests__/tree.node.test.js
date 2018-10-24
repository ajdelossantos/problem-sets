const TreeNode = require('../classes/tree.node');

describe('TreeNode', () => {
  const testNode = new TreeNode(5);

  test('should take in a value in the constructor and define it as a property', () => {
    expect(testNode.value).toEqual(5);
  });

  test('should set and expose a left and right child property', () => {
    testNode.left = new TreeNode(2);
    expect(testNode.left.value).toEqual(2);

    testNode.right = new TreeNode(5);
    expect(testNode.right.value).toEqual(5);
  });
});
