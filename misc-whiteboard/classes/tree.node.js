function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

TreeNode.prototype.toString = function() {
  `{ val: ${this.value}, left: ${this.left}, right: ${this.right} }`;
};

module.exports = TreeNode;
