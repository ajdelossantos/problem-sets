const TreeNode = require('./tree.node');
const {
  insertLeftSubtree,
  insertRightSubtree
} = require('../modules/BinarySearchTree/insertSubtree');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
    } else if (newNode.value < this.root.value) {
      insertLeftSubtree(this.root.left, newNode);
    } else if (newNode.value >= this.root.value) {
      insertRightSubtree(this.root.right, newNode);
    }

    return false;
  }

  find() {
    return false;
  }

  delete() {
    return false;
  }

  maximum() {
    return NaN;
  }

  depth() {
    return NaN;
  }

  isBalanced() {
    return false;
  }

  inOrderTraversal() {
    return [];
  }

  toString() {
    return this.root;
  }
}

module.exports = BinarySearchTree;
