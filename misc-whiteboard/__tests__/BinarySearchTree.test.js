const BinarySearchTree = require('../classes/BinarySearchTree');

describe('BinarySearchTree', () => {
  // Setup
  const sampleBST = new BinarySearchTree();
  const sampleNodeValues = [5, 3, 7, 1, 4, 9, 0, 2, 1.5, 10];
  testNodeValues.forEach(el => {
    testBST.insert(el);
  });

  let preFilledTestBST = sampleBST;
  let emptyTestBST = new BinarySearchTree();

  afterEach(() => {
    testBST = sampleBST;
    emptyTestBST = new BinarySearchTree();
  });

  describe('#constructor', () => {
    test('should seet root to null', () => {
      expect(emptyTestBST.root).toBeNull();
    });
  });

  describe('#insert', () => {
    test.skip('should insert values in the correct order', () => {});
  });

  describe('#find', () => {
    test.skip('should return null if the value is not in the BST', () => {
      // TODO
    });
  });
});
