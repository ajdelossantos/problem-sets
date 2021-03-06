const BinarySearchTree = require('../classes/BinarySearchTree');
const TreeNode = require('../classes/tree.node');

describe('BinarySearchTree', () => {
  // Setup
  const sampleBST = new BinarySearchTree();
  const sampleNodeValues = [5, 3, 7, 1, 4, 9, 0, 2, 1.5, 10];
  sampleNodeValues.forEach(el => {
    sampleBST.insert(el);
  });

  let preFilledTestBST = sampleBST;
  let testBST = new BinarySearchTree();

  afterEach(() => {
    preFilledTestBST = sampleBST;
    testBST = new BinarySearchTree();
  });

  describe('#constructor', () => {
    test('should seet root to null', () => {
      expect(testBST.root).toBeNull();
    });
  });

  describe('#insert', () => {
    test('should insert values in the correct order', () => {
      testBST.insert(5);
      expect(testBST.root.value).toEqual(5);

      testBST.insert(2);
      expect(testBST.root.left.value).toEqual(2);

      testBST.insert(8);
      expect(testBST.root.right.value).toEqual(8);

      testBST.insert(1);
      const intermediateRoot = testBST.root.left;

      expect(intermediateRoot.left.value).toEqual(1);

      expect(preFilledTestBST.root.value).toEqual(5);
      expect(preFilledTestBST.root.left.value).toEqual(3);
      expect(preFilledTestBST.root.left.left.value).toEqual(1);
      expect(preFilledTestBST.root.left.left.left.value).toEqual(0);
      expect(preFilledTestBST.root.left.left.right.value).toEqual(2);
      expect(preFilledTestBST.root.left.left.right.left.value).toEqual(1.5);
      expect(preFilledTestBST.root.left.right.value).toEqual(4);
      expect(preFilledTestBST.root.left.right.right).toEqual(null);
      expect(preFilledTestBST.root.right.value).toEqual(7);
      expect(preFilledTestBST.root.right.left).toEqual(null);
      expect(preFilledTestBST.root.right.right.value).toEqual(9);
      expect(preFilledTestBST.root.right.right.right.value).toEqual(10);
    });
  });

  describe.only('#find', () => {
    test('should return null if the value is not in the BST', () => {
      expect(preFilledTestBST.find(-5)).toBeNull();
    });

    test('should return the correct node if the value is in the BST', () => {
      const foundNode = preFilledTestBST.find(4);

      expect(foundNode).toBeInstanceOf(TreeNode);
      expect(foundNode.value).toEqual(4);
    });
  });

  describe('#delete', () => {
    describe('If the target node has no children, it', () => {
      test.skip('should delete the target node', () => {
        // TODO
      });

      test.skip('should set the root to nil if the target node is the root', () => {
        // TODO
      });
    });

    describe('If the target node has one child, it', () => {
      test.skip('should delete the target node and promote its child', () => {
        // TODO
      });
    });

    describe('If the target node has two children, it', () => {
      test.skip("should replace the target node with the maximum of the target's left tree", () => {
        // TODO
      });

      describe('When promoted child has its own child, it', () => {
        test.skip('should promote its child to take its place', () => {
          // TODO
        });
      });
    });

    describe('#maximum', () => {
      test.skip('should find the maximum', () => {
        // TODO
      });

      test.skip('should find the maximum of subtrees', () => {
        // TODO
      });
    });

    describe('#depth', () => {
      test.skip('should find the depth of the tree', () => {
        // TODO
      });
    });

    describe('#isBalanced', () => {
      describe('When tree is balanced, it', () => {
        test.skip('should return true', () => {
          // TODO
        });
      });

      describe('When tree is unbalanced, it', () => {
        test.skip('should return false', () => {
          // TODO
        });
      });
    });

    describe('#inOrderTraversal', () => {
      test.skip('should visits left children, then itself, then right children', () => {
        // TODO
      });
    });
  });
});
