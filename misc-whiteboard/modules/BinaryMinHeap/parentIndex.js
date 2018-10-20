const parentIndex = index => {
  if (index === 0) {
    throw new RangeError('root has no parent');
  } else if (index % 2 === 0) {
    return index / 2 - 1;
  } else if (index % 2 === 1) {
    return (index - 1) / 2;
  } else {
    throw new Error('unexpected input');
  }
};

module.exports = parentIndex;
