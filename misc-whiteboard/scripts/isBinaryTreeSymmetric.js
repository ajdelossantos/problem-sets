const TreeNode = require('../classes/tree.node');

const isBinaryTreeSymmetric = function (rootNode) {
  if (rootNode.value === null) return true;
  if (rootNode.left === null && rootNode.right === null) return true;

  return areNodeSiblingsEqual(rootNode.left, rootNode.right);
};

function areNodeSiblingsEqual(leftChild, rightChild) {
  if (leftChild === undefined && rightChild === undefined) return true;
  if (leftChild === undefined ^ rightChild === undefined) return false; // ^ => XOR

  const areSiblingValuesEqual = leftChild.value === rightChild.value;

  const recursiveSiblingsEqual = areNodeSiblingsEqual(leftChild.left, rightChild.right) && areNodeSiblingsEqual(rightChild.left, leftChild.right);

  return areSiblingValuesEqual && recursiveSiblingsEqual;
}

module.exports = isBinaryTreeSymmetric;
