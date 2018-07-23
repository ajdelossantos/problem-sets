const mergeArrays = (arrayOne, arrayTwo) => {
  // Input arrays are sorted and contain unique integers

  // Initialize result
  // Initialize pointers for indices in each array
  // Walk each array simultaneously
  // compare values, push the smallest one into the array
  // Once one array has all its values in the result, push the contents of the next array in
  // Return result

  let result = [];
  let i = 0;
  let j = 0;

  while (i < arrayOne.length && j < arrayTwo.length) {
    let elementOne = arrayOne[i];
    let elementTwo = arrayTwo[j];

    if (elementOne < elementTwo) {
      result.push(elementOne);
      i++;
    } else {
      result.push(elementTwo);
      j++;
    }
  }

  if (i === arrayOne.length) {
    while (j < arrayTwo.length) {
      result.push(arrayTwo[j]);
      j++;
    }
  } else {
    while (i < arrayOne.length) {
      result.push(arrayOne[i]);
      i++;
    }
  }

  return result;
};

module.exports = mergeArrays;
