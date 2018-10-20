const ascendingComparator = require('../ascendingComparator');
const parentIndex = require('./parentIndex');

const heapifyUp = ({
  inputArray,
  childIndex,
  comparisonFunction = ascendingComparator,
  length = inputArray.length
}) => {
  let isHeap = false;
  let currentIndex = childIndex;
  let currentNode = inputArray[currentIndex];

  while (!isHeap && currentIndex !== 0) {
    const currentParentIndex = parentIndex(currentIndex);
    const currentParent = inputArray[currentParentIndex];

    if (comparisonFunction(currentNode, currentParent) < 0) {
      [inputArray[currentParentIndex], inputArray[currentIndex]] = [
        inputArray[currentIndex],
        inputArray[currentParentIndex]
      ];

      currentIndex = currentParentIndex;
      currentNode = inputArray[currentIndex];
    } else {
      isHeap = true;
    }
  }
  return inputArray;
};

module.exports = heapifyUp;
