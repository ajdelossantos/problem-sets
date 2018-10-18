const BinaryMinHeap = require('../classes/BinaryMinHeap');

describe('BinaryMinHeap', () => {
  describe('indexing functions', () => {
    test('calculates child indices correctly', () => {
      expect(BinaryMinHeap.childIndices(6, 0)).toEqual([1, 2]);
      expect(BinaryMinHeap.childIndices(6, 1)).toEqual([3, 4]);
      expect(BinaryMinHeap.childIndices(6, 2)).toEqual([5]);
    });

    test('calculates parent indices correctly', () => {
      expect(BinaryMinHeap.parentIndex(5)).toEqual(2);
      expect(BinaryMinHeap.parentIndex(4)).toEqual(1);
      expect(BinaryMinHeap.parentIndex(3)).toEqual(1);
      expect(BinaryMinHeap.parentIndex(2)).toEqual(0);
      expect(BinaryMinHeap.parentIndex(1)).toEqual(0);
      expect(BinaryMinHeap.parentIndex()).toThrowError('root has no parent');
    });
  });

  describe('heapify up and down', () => {
    test('heapifyDown works correctly', () => {
      const test1 = [7, 4, 5];
      const result1 = [4, 7, 5];

      const test2 = [7, 4, 5, 6, 8];
      const result2 = [4, 6, 5, 7, 8];

      expect(BinaryMinHeap.heapifyDown(test1, 0)).toEqual(result1);
      expect(BinaryMinHeap.heapifyDown(test2, 0)).toEqual(result2);
    });

    test('heapifyUp works correctly', () => {
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

    test('heapifyDown with callback works correctly', () => {
      const test5 = [1, 2, 3];
      const result5 = [3, 2, 1];

      const test6 = [1, 5, 4, 3];
      const result6 = [5, 3, 4, 1];

      expect(BinaryMinHeap.heapifyDown(test5, 0, toMaxHeap)).toEqual(result5);
      expect(BinaryMinHeap.heapifyDown(test6, 0, toMaxHeap)).toEqual(result6);
    });

    test('heapifyUp with callback works correctly', () => {
      const test7 = [2, 1, 3];
      const result7 = [3, 1, 2];

      const test8 = [4, 3, 1, 5];
      const result8 = [5, 4, 1, 3];

      expect(BinaryMinHeap.heapifyUp(test7, 2, toMaxHeap)).toEqual(result7);
      expect(BinaryMinHeap.heapifyUp(test8, 3, toMaxHeap)).toEqual(result8);
    });
  });

  describe('heap operation', () => {
    test('has a store that starts empty', () => {
      const testHeap0 = new BinaryMinHeap();

      expect(testHeap0.store).toEqual([]);
    });

    test('pushes correctly', () => {
      const testHeap1 = new BinaryMinHeap();

      testHeap1.push(7);
      expect(testHeap1.store).toEqual([7]);

      testHeap1.push(5);
      expect(testHeap1.store).toEqual([5, 7]);

      testHeap1.push(6);
      expect(testHeap1.store).toEqual([5, 7, 6]);

      testHeap1.push(4);
      expect(testHeap1.store).toEqual([4, 5, 6, 7]);
    });

    test('extracts correctly', () => {
      const testHeap2 = new BinaryMinHeap();
      [7, 5, 6, 4].forEach(int => testHeap2.push(int));

      expect(heap.extract()).toEqual(4);
      expect(heap.store).toEqual([5, 7, 6]);

      expect(heap.extract()).toEqual(5);
      expect(heap.store).toEqual([6, 7]);
    });
  });
});
