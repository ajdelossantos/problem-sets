const findDeepestLeftmostNode = rootNode => {
  // Null tree
  if (!rootNode) return null;
  // Root Tree
  if (!rootNode.left && !rootNode.right) return rootNode;

  // Modified BFS: initialize a queue with the rootNode, load into queue from right to left
  const hasChildren = node => (node.left || node.right ? true : false);
  let queue = [rootNode];

  while (queue.length >= 1 && hasChildren(queue[0])) {
    let currentNode = queue.shift();

    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
  }

  const lastQueueIndex = queue.length - 1;
  return queue[lastQueueIndex];
};

module.exports = findDeepestLeftmostNode;
