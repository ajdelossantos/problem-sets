// Comment in the line below to access TreeNode class
// const TreeNode = require('../classes/tree.node');

const isBinaryTreeSymmetric = function (rootNode) {
  // First handle edge cases, then defer to a helper method
  // A null tree is symmetric
  if (rootNode.value === null) return true;

  // A solo tree is also symmetric
  if (rootNode.left === null && rootNode.right === null) return true;

  // The trick here is to recursively compare opposite sub-trees
  return areNodeSiblingsEqual(rootNode.left, rootNode.right);
};

function areNodeSiblingsEqual(leftChild, rightChild) {
  // Main logic of the problem
  // A solo tree is symmetric
  if (leftChild === null && rightChild === null) return true;

  // If precisely one of two children are null, it is not symmetrical
  if (leftChild === null ^ rightChild === null) return false; // ^ => XOR

  const areChildValuesEqual = leftChild.value === rightChild.value;

  // checks both outer and inner children
  // TODO: rename
  const recursiveSiblingsEqual = areNodeSiblingsEqual(leftChild.left, rightChild.right) && areNodeSiblingsEqual(rightChild.left, leftChild.right);

  return areChildValuesEqual && recursiveSiblingsEqual;
}

module.exports = isBinaryTreeSymmetric;
