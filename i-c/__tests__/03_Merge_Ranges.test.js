const mergeRanges = require('../scripts/03_Merge_Ranges');

describe ('03 - Merge Ranges', () => {
  let testMeetings1 = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 }
  ];

  test ('returns an array', () => {
    expect(mergeRanges(testMeetings1)).toBeInstanceOf(Array);
  });
  
  test('returns an array of condensed ranges', () => {
    let result1 = [
      { startTime: 0, endTime: 1 },
      { startTime: 3, endTime: 8 },
      { startTime: 9, endTime: 12 }
    ];

    expect(mergeRanges(testMeetings1)).toEqual(result1);
  });

  test('handles meetings with colliding start and end times', () => {
    let testMeetings2 = [
      { startTime: 1, endTime: 2 },
      { startTime: 2, endTime: 4 }
    ]

    let result2 = [
      { startTime: 1, endTime: 4 }
    ]

    expect(mergeRanges(testMeetings2)).toEqual(result2);
  })

  test('handles meetings with overlapping start and end times', () => {
    let testMeetings3 = [
      { startTime: 1, endTime: 3 },
      { startTime: 2, endTime: 4 }
    ]

    let result3 = [
      { startTime: 1, endTime: 4 }
    ]

    expect(mergeRanges(testMeetings3)).toEqual(result3);
  })

});