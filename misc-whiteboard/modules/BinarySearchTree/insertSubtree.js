const TreeNode = require('../../classes/tree.node');

// TODO this is broken...
function insertLeftSubtree(treeNode, newNode) {
  if (!treeNode) {
    treeNode = newNode;
    console.log(treeNode);
  } else if (!treeNode.left && newNode.value < treeNode.value) {
    treeNode.left = newNode;
  } else {
    insertLeftSubtree(treeNode.left, newNode);
  }
}

function insertRightSubtree(treeNode, newNode) {
  if (!treeNode) {
    treeNode = newNode;
  } else if (!treeNode.right && newNode.value >= treeNode.value) {
    treeNode.right = newNode;
  } else {
    insertLeftSubtree(treeNode.right, newNode);
  }
}

module.exports = { insertLeftSubtree, insertRightSubtree };
