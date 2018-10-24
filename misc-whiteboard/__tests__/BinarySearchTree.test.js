const BinarySearchTree = require('../classes/BinarySearchTree');

describe('BinarySearchTree', () => {
  // Setup
  const sampleBST = new BinarySearchTree();
  const sampleNodeValues = [5, 3, 7, 1, 4, 9, 0, 2, 1.5, 10];
  testNodeValues.forEach(el => {
    testBST.insert(el);
  });

  let testBST = sampleBST;

  afterEach(() => {
    testBST = sampleBST;
  });
});
