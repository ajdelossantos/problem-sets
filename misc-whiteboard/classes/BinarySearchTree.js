const TreeNode = require('./tree.node');
const insertSubtree = require('../modules/BinarySearchTree/insertSubtree');
const depthFirstSearch = require('../modules/BinarySearchTree/depthFirstSearch');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // O(log(n))
  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    return insertSubtree(this.root, newNode);
  }

  // O(log(n)), depth first search
  find(value) {
    if (!this.root) return null;
    return depthFirstSearch(this.root, value);
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
