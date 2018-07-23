const mergeArrays = require('../scripts/Merge_Arrays');

describe('mergeArrays', () => {
  const arrayOne = [3, 4, 6, 10, 11, 15];
  const arrayTwo = [1, 5, 8, 12, 14, 19];
  const mergedArray = [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19];

  test('should return an array', () => {
    const result = mergeArrays(arrayOne, arrayTwo);
    expect(Array.isArray(result)).toBe(true);
  });

  test('should return a sorted array', () => {
    expect(mergeArrays(arrayOne, arrayTwo)).toEqual(mergedArray);
  });

  test('should handle empty arrays', () => {
    const emptyArray = [];

    expect(mergeArrays(emptyArray, arrayTwo)).toEqual(arrayTwo);
    expect(mergeArrays(arrayOne, emptyArray)).toEqual(arrayOne);
  });
});
