const mergeRanges = meetings => {

  // 1. Sort meetings
  // 2. Initialize result array with first meeting
  // 3. Iterate through...
  // 4. Merge adjecent meetings if currentMeeting starts before the lastMergedMeeting ends
  //     AND currentMeeting ends later; push current meeting otherwise
  // 5. Return result

  // Deep copy
  const meetingsDeepDup = JSON.parse(JSON.stringify(meetings));

  // Sort in-place
  const sortedMeetings = meetingsDeepDup.sort((a, b) =>
    a.startTime > b.startTime ? 1 : -1
  );

  // Initialize result with earliest meeting
  let result = [sortedMeetings.shift()];

  // Iterate through
  sortedMeetings.forEach((meeting, index) => {
    const currentMeeting = sortedMeetings[index];
    const lastMergedMeeting = result[result.length - 1];
    
    // Account for edge cases
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
    } else {
      result.push(currentMeeting);
    }
  });

  return result;
}
/*
==========
Testing
==========

let test1 = [
  { startTime: 2, endTime: 4 },
  { startTime: 1, endTime: 3 }, 
]

console.log(mergeRanges(test1));
*/

module.exports = mergeRanges;