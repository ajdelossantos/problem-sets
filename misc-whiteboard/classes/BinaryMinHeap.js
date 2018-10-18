// Callback for ascendingHeapSort
const defaultSort = (x, y) => {
  if (x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  } else {
    return 0;
  }
};

class BinaryMinHeap {
  // Your code here

  constructor(sortCallback = defaultSort) {
    this.store = [];
    this.count = this.count.bind(this);
    this.sortCallback = sortCallback;
  }

  count() {
    return this.store.length;
  }

  peek() {
    return this.store[0];
  }

  push(int) {
    this.store.push(int);
    BinaryMinHeap.heapifyUp(this.store, this.count - 1, this.sortCallback);
  }

  extract() {
    [this.store[0], this.store[this.store.length - 1]] = [
      this.store[this.store.length - 1],
      this.store[0]
    ];
    const extractedElement = this.store.pop();
    BinaryMinHeap.heapifyDown(this.store, this.count - 1, this.sortCallback);

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
    parentIndex,
    length = inputArray.length,
    sortCallback
  ) {
    // Code goes here
  }

  static heapifyDown(
    inputArray,
    parentIndex,
    length = inputArray.length,
    sortCallback
  ) {
    // Code goes here
  }

  toString() {
    return `
      BinaryMinHeap { 
        store: [${this.store}],
        length: ${this.count()}
      }
    `;
  }
}
module.exports = BinaryMinHeap;
