const heapSort = require('../scripts/heapSort');

describe('heapSort', () => {
  test('should return an array', () => {
    let testArray0 = [42, 5, 9];
    heapSort(testArray0);

    expect(Array.isArray(testArray0)).toBe(true);
  });

  test.skip('should sort an unsorted array', () => {
    let testArray1 = [4, 2, 1, 3, 5, 7, 8, 9];
    heapSort(testArray1);

    expect(testArray1).toEqual([1, 2, 3, 4, 5, 7, 8, 9]);
  });

  test.skip('should sort a reversed array', () => {
    let testArray2 = [5, 4, 3, 2, 1];
    heapSort(testArray2);

    expect(testArray2).toEqual([1, 2, 3, 4, 5]);
  });

  test.skip('should not sort a sorted array', () => {
    let testArray3 = [1, 2, 3, 4, 5];
    heapSort(testArray3);

    expect(testArray3).toEqual([1, 2, 3, 4, 5]);
  });
});
