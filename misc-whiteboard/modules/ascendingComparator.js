// Used for sorting functions
const ascendingComparator = (x, y) => {
  if (x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  } else {
    return 0;
  }
};

module.exports = ascendingComparator;
