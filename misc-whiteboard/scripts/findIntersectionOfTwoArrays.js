const findIntersectionOfTwoArrays = (array1, array2) => {
  /* Adapted from Geeks for Geeks
    1. Sort both arrays
    2. Loop through the smaller array
    3. For each element in the smaller array, binary search the bigger array 
    4. If found, concat result into a result string
    5. Return result string
    Runtime: O min((m+n)Logm, (m+n)Logn)
  */

  array1 = array1.sort((a, b) => (a < b ? -1 : 1));
  array2 = array2.sort((a, b) => (a < b ? -1 : 1));

  let smallerArray = array1.length <= array2.length ? array1 : array2;
  let biggerArray = array1.length > array2.length ? array1 : array2;
  let result = [];

  // Handles uniques; should have 0(1) lookup
  let searchSet = new Set(smallerArray);

  searchSet.forEach(el => {
    let searchResultIndex = binaryIndexOf.call(biggerArray, el);
    if (searchResultIndex !== -1) {
      result.push(biggerArray[searchResultIndex]);
    }
  });

  return result.join(' ');

  /*
  Naive version!

  let result = [];

  array1.forEach(el1 => {
    array2.forEach(el2 => {
      if (el1 === el2) {
        result.push(el1);
      };
    });
  });

  result = new Set(result.sort((a, b) => a < b ? -1 : 1));

  return Array.from(result).join(' ');
  */
};

function binaryIndexOf(searchValue) {
  let minIndex = 0;
  let maxIndex = this.length - 1;
  let currentIndex;
  let currentValue;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentValue = this[currentIndex];

    if (currentValue < searchValue) {
      minIndex = currentIndex + 1;
    } else if (currentValue > searchValue) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }

  return -1;
}

module.exports = findIntersectionOfTwoArrays;
