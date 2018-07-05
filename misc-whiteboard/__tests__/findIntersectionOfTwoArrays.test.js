const findIntersectionOfTwoArrays = require('../scripts/findIntersectionOfTwoArrays');

// Shuffles an array in place. Fisher-Yates method
function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;

    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
};

// Removes in-place
function removeRandomArrayElements(array, numberOfElementsToRemove = 1) {
  for (let i = 0; i < numberOfElementsToRemove; i++) {
    let index = Math.floor(Math.random() * (array.length - 1));

    array.splice(index, 1);
  };

  return array;
};

describe('findIntersectionOfTwoArrays', () => {
  let arrayOne;
  let arrayTwo;

  afterEach(() => {
    arrayOne = [];
    arrayTwo = [];
  });

  test('returns a string', () => {
    arrayOne = [4, 6, 0, 13];
    arrayTwo = [12, 4, 42, 5, 1, 3, 13, 7];

    expect(typeof findIntersectionOfTwoArrays(arrayOne, arrayTwo)).toBe('string');
  });

  test('returns a string of sorted integers', () => {
    arrayOne = [4, 6, 0, 13];
    arrayTwo = [12, 4, 42, 5, 1, 3, 13, 7];

    expect(findIntersectionOfTwoArrays(arrayOne, arrayTwo)).toBe('4 13');
  });

  test('returns an empty string when given at least one empty array', () => {
    arrayOne = [];
    arrayTwo = [1, 0];

    expect(findIntersectionOfTwoArrays(arrayOne, arrayTwo)).toBe('');
  });

  test('returns only unique integers when duplicates are present', () => {
    arrayOne = [1, 1, 1, 1, 1, 1, 0];
    arrayTwo = [1, 0, 0];

    expect(findIntersectionOfTwoArrays(arrayOne, arrayTwo)).toBe('0 1')
  });

  describe('Runtime', () => {
    // Maybe not the best way to test this
    // Runtime must be less than 5 seconds
    test('runs in O(mLogm + nLogn) for large datasets', () => {
      arrayOne = [4, 6, 0, 1001];

      for (let i = 0; i < 1000; i++) {
        arrayTwo.push(i);
      }

      shuffle(arrayTwo);

      const NS_PER_SEC = 1e9
      const time = process.hrtime();
      findIntersectionOfTwoArrays(arrayOne, arrayTwo);
      const diff = process.hrtime(time);

      removeRandomArrayElements(arrayTwo, 10);

      const runtime = diff[0] * NS_PER_SEC + diff[1];
      const runtimeInMilliseconds = runtime * .000001

      console.log(`Benchmark took ${runtimeInMilliseconds} ms`);

      expect(runtimeInMilliseconds).toBeLessThan(5000);
    });
  });
});
