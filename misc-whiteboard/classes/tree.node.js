function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

TreeNode.prototype.tostring = function () {
  `{ val: ${this.value}, left: ${this.left}, right: ${this.right} }`
}

module.exports = TreeNode;