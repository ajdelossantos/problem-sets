const childIndices = (length, index) => {
  const left = index * 2 + 1;
  const right = index * 2 + 2;
  const result = [];

  if (left < length) result.push(left);
  if (right < length) result.push(right);

  return result;
};

module.exports = childIndices;
