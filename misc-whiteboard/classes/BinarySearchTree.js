const TreeNode = require('./tree.node');
const insertSubtree = require('../modules/BinarySearchTree/insertSubtree');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    return insertSubtree(currentNode, newNode);
  }

  find() {
    return null;
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
