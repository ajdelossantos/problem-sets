// Used for sorting functions
const ascendingComparator = (x, y) => {
  if (x < y) {
    // Results in the sorting [x, y]
    return -1;
  } else if (x > y) {
    // Results in the sorting [y, x]
    return 1;
  } else {
    // Equivalent, so order doesn't matter
    return 0;
  }
};

module.exports = ascendingComparator;
