const ascendingComparator = require('../ascendingComparator');
const childIndices = require('./childIndices');

const heapifyDown = ({
  inputArray,
  parentIndex,
  comparisonFunction = ascendingComparator,
  length = inputArray.length
}) => {
  let isHeap = false;
  let currentIndex = parentIndex;
  let currentNode = inputArray[currentIndex];
  let currentChildIndices = childIndices(length, currentIndex);

  while (!isHeap) {
    const currentChildren = currentChildIndices.map(index => inputArray[index]);

    let leftChildIndex, rightChildIndex, leftChild, rightChild;
    [leftChildIndex, rightChildIndex] = currentChildIndices;
    [leftChild, rightChild] = currentChildren;

    if (
      comparisonFunction(currentNode, leftChild) > 0 ||
      comparisonFunction(currentNode, rightChild) > 0
    ) {
      let swapIndex;

      if (comparisonFunction(leftChild, rightChild) < 0 || !rightChild) {
        swapIndex = leftChildIndex;
      } else {
        swapIndex = rightChildIndex;
      }

      [inputArray[currentIndex], inputArray[swapIndex]] = [
        inputArray[swapIndex],
        inputArray[currentIndex]
      ];

      currentIndex = swapIndex;
      currentNode = inputArray[currentIndex];
      currentChildIndices = childIndices(length, currentIndex);
    } else {
      isHeap = true;
    }
  }

  return inputArray;
};

module.exports = heapifyDown;
