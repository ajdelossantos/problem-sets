// Callback for ascendingHeapSort
const ascendingComparator = (x, y) => {
  if (x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  } else {
    return 0;
  }
};

class BinaryMinHeap {
  constructor(comparisonFunction = ascendingComparator) {
    this.store = [];
    this.count = this.count.bind(this);
    this.comparisonFunction = comparisonFunction;
  }

  count() {
    return this.store.length;
  }

  peek() {
    return this.store[0];
  }

  push(int) {
    this.store.push(int);
    BinaryMinHeap.heapifyUp(
      this.store,
      this.store.length - 1,
      this.comparisonFunction
    );

    return this.store;
  }

  extract() {
    [this.store[0], this.store[this.store.length - 1]] = [
      this.store[this.store.length - 1],
      this.store[0]
    ];
    const extractedElement = this.store.pop();

    BinaryMinHeap.heapifyDown(this.store, 0, this.comparisonFunction);

    return extractedElement;
  }

  static childIndices(length, index) {
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    const result = [];

    if (left < length) result.push(left);
    if (right < length) result.push(right);

    return result;
  }

  static parentIndex(index) {
    if (index === 0) {
      throw new RangeError('root has no parent');
    } else if (index % 2 === 0) {
      return index / 2 - 1;
    } else if (index % 2 === 1) {
      return (index - 1) / 2;
    } else {
      throw new Error('unexpected input');
    }
  }

  static heapifyUp(
    inputArray,
    childIndex,
    comparisonFunction = ascendingComparator
  ) {
    let isHeap = false;
    let currentIndex = childIndex;
    let currentNode = inputArray[currentIndex];

    while (!isHeap && currentIndex !== 0) {
      const currentParentIndex = BinaryMinHeap.parentIndex(currentIndex);
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
  }

  static heapifyDown(
    inputArray,
    parentIndex,
    comparisonFunction = ascendingComparator,
    length = inputArray.length
  ) {
    let isHeap = false;
    let currentIndex = parentIndex;
    let currentNode = inputArray[currentIndex];
    let currentChildIndices = BinaryMinHeap.childIndices(length, currentIndex);

    while (!isHeap) {
      const currentChildren = currentChildIndices.map(
        index => inputArray[index]
      );

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
        currentChildIndices = BinaryMinHeap.childIndices(length, currentIndex);
      } else {
        isHeap = true;
      }
    }

    return inputArray;
  }

  toString() {
    return `
      BinaryMinHeap { 
        store: [${this.store.map(
          (el, idx) => (idx === 0 ? `${el}` : ` ${el}`)
        )}],
        length: ${this.count()}
      }
    `;
  }
}
module.exports = BinaryMinHeap;
