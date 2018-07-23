const findDuplicateFiles = require('../scripts/Find_Duplicate_Files');

describe('findDuplicateFiles', () => {
  const fileSystemOne = {
    Documents: {
      'hello_world.txt': {
        body: 'hi',
        timestamp: 0
      },
      'duplicate.txt': {
        body: 'hi',
        timestamp: 1
      },
      'not_hello_world.txt': {
        body: 'Nope.',
        timestamp: 0
      }
    },
    Desktop: {},
    Root: {
      System: {
        'important.txt': {
          body: 'testOne',
          timestamp: 0
        },
        'also_important.txt': {
          body: 'testTwo',
          timestamp: 0
        },
        Config: {
          'settings.txt': {
            body: 'Stuff',
            timestamp: 0
          },
          'duped_settings.txt': {
            body: 'Stuff',
            timestamp: 1
          }
        }
      }
    }
  };

  test('should return an array of arrays', () => {
    let result = findDuplicateFiles(fileSystemOne);
    expect(Array.isArray(result)).toBe(true);

    result.forEach(el => {
      expect(Array.isArray(el)).toBe(true);
    });
  });

  describe('Array Elements', () => {
    test('should contain exactly two files', () => {
      let result = findDuplicateFiles(fileSystemOne);

      result.forEach(el => {
        expect(el.length).toBe(2);
      });
    });

    test.skip('should contain the duplicate file first, then original second', () => {});
  });
});
