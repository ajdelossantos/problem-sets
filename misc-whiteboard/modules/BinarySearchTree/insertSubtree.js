const TreeNode = require('../../classes/tree.node');

// Recursive implementation
function insertSubtree(currentNode, newNode) {
  if (newNode.value < currentNode.value) {
    if (!currentNode.left) {
      currentNode.left = newNode;
      return;
    } else {
      insertSubtree(currentNode.left, newNode);
    }
  } else {
    if (!currentNode.right) {
      currentNode.right = newNode;
      return;
    } else {
      insertSubtree(currentNode.right, newNode);
    }
  }
}
// Iterative implementation
function insertSubtreeIterative(currentNode, newNode) {
  while (currentNode) {
    if (newNode.value < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        return;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        return;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
}

module.exports = insertSubtree;
