const BinaryMinHeap = require('../classes/BinaryMinHeap');

describe('BinaryMinHeap', () => {
  describe('indexing functions', () => {
    test('calculates child indices correctly', () => {
      expect(BinaryMinHeap.childIndices(6, 0)).toEqual([1, 2]);
      expect(BinaryMinHeap.childIndices(6, 1)).toEqual([3, 4]);
      expect(BinaryMinHeap.childIndices(6, 2)).toEqual([5]);
    });

    test.skip('calculates parent indices correctly', () => {
      expect(BinaryMinHeap.parentIndex(5)).toEqual(2);
      expect(BinaryMinHeap.parentIndex(4)).toEqual(1);
      expect(BinaryMinHeap.parentIndex(3)).toEqual(1);
      expect(BinaryMinHeap.parentIndex(2)).toEqual(0);
      expect(BinaryMinHeap.parentIndex(1)).toEqual(0);
      expect(BinaryMinHeap.parentIndex()).toThrowError('root has no parent');
    });
  });

  describe('heapify up and down', () => {
    test.skip('heapifyDown works correctly', () => {
      const test1 = [7, 4, 5];
      const result1 = [4, 7, 5];

      const test2 = [7, 4, 5, 6, 8];
      const result2 = [4, 6, 5, 7, 8];

      expect(BinaryMinHeap.heapifyDown(test1, 0)).toEqual(result1);
      expect(BinaryMinHeap.heapifyDown(test2, 0)).toEqual(result2);
    });

    test.skip('heapifyUp works correctly', () => {
      const test3 = [4, 5, 1];
      const result3 = [1, 5, 4];

      const test4 = [3, 4, 5, 1];
      const result4 = [1, 3, 5, 4];

      expect(BinaryMinHeap.heapifyUp(test3, 2)).toEqual(result3);
      expect(BinaryMinHeap.heapifyUp(test4, 3)).toEqual(result4);
    });

    // Callback function passed to heapify turns MinHeap into MaxHeap
    const toMaxHeap = (el1, el2) => {
      if (el1 < el2) {
        return 1;
      } else if (el1 > el2) {
        return -1;
      } else {
        return 0;
      }
    };

    test.skip('heapifyDown with callback works correctly', () => {});

    test.skip('heapifyUp with callback works correctly', () => {});
  });

  describe('heap operation', () => {
    test.skip('has a store that start empty', () => {});

    test.skip('pushes correctly', () => {});

    test.skip('extracts correctly', () => {});
  });
});
