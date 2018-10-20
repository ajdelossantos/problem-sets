const ascendingComparator = require('../modules/ascendingComparator'); // Callback for ascendingHeapSort
const childIndices = require('../modules/BinaryMinHeap/childIndices');
const parentIndex = require('../modules/BinaryMinHeap/parentIndex');
const heapifyUp = require('../modules/BinaryMinHeap/heapifyUp');
const heapifyDown = require('../modules/BinaryMinHeap/heapifyDown');

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

    BinaryMinHeap.heapifyUp({
      inputArray: this.store,
      childIndex: this.count() - 1,
      comparisonFunction: this.comparisonFunction
    });

    return this.store;
  }

  extract() {
    [this.store[0], this.store[this.count() - 1]] = [
      this.store[this.count() - 1],
      this.store[0]
    ];
    const extractedElement = this.store.pop();

    BinaryMinHeap.heapifyDown({
      inputArray: this.store,
      parentIndex: 0,
      comparisonFunction: this.comparisonFunction
    });

    return extractedElement;
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

  /*==================================================
  See modules for implementation of class methods 
  ==================================================*/

  static childIndices(length, index) {
    return childIndices(length, index);
  }

  static parentIndex(index) {
    return parentIndex(index);
  }

  static heapifyUp({
    inputArray,
    childIndex,
    comparisonFunction = ascendingComparator,
    length = inputArray.length
  }) {
    return heapifyUp(arguments[0]);
  }

  static heapifyDown({
    inputArray,
    parentIndex,
    comparisonFunction = ascendingComparator,
    length = inputArray.length
  }) {
    return heapifyDown(arguments[0]);
  }
}

module.exports = BinaryMinHeap;
