const kLargestElements = require('../scripts/kLargestElements');

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
}

function sample(array, n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * array.length);

    result.push(array[randomIndex]);
  }

  return result;
}

// Random sampling of ints from 0 - 999 of length 400
const generateRandomArray = () => {
  const result = [];

  for (let i = 0; i < 400; i++) {
    const randomInt = Math.floor(Math.random() * 1000);

    result.push(randomInt);
  }

  return result;
};

describe('kLargestElements', () => {
  test('returns the correct set of elements', () => {
    const test1 = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const result1 = [9, 8, 7, 6];

    const test2 = generateRandomArray();
    const result2 = test2.sort((a, b) => b - a).slice(0, 10);

    expect(kLargestElements(test1, 4)).toEqual(result1);
    expect(kLargestElements(test2, 10)).toEqual(result2);
  });
});
