// Recursive
function depthFirstSearch(currentNode, value) {
  let foundNode;

  if (currentNode.value === value) {
    foundNode = currentNode;
  } else if (value < currentNode.value && currentNode.left) {
    foundNode = depthFirstSearch(currentNode.left, value);
  } else if (value >= currentNode.value && currentNode.right) {
    foundNode = depthFirstSearch(currentNode.right, value);
  } else {
    foundNode = null;
  }

  return foundNode;
}

// Iterative
function _depthFirstSearch(rootNode, value) {
  if (!rootNode) return null;

  const stack = [rootNode];

  while (stack.length > 0) {
    let currentNode = stack.pop();

    if (currentNode.value === value) {
      return currentNode;
    } else if (value < currentNode.value && currentNode.left) {
      stack.push(currentNode.left);
    } else if (value >= currentNode.value && currentNode.right) {
      stack.push(currentNode.right);
    } else {
      break;
    }
  }

  return null;
}

module.exports = depthFirstSearch;
