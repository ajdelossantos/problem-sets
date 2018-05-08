const doTwoMovieLengthsEqualFlightLength = require('../scripts/14_Inflight_Entertainment');

describe('14 - Inflght Entertainment', () => {

  let flightLength;
  let movieLengths;

  test('returns a boolean value', () => {
    flightLength = 60;
    movieLengths = [20, 40];
    
    expect(typeof doTwoMovieLengthsEqualFlightLength(flightLength, movieLengths)).toBe('boolean');
  });

  test('returns true if there are two numbers in movieLengths whose sum equals flightLength', () => {
    flightLength = 60;
    movieLengths = [60, 20, 30, 40, 15, 15];

    expect(doTwoMovieLengthsEqualFlightLength(flightLength, movieLengths)).toBe(true)
  })

  test('returns false if movieLengths is empty', () => {
    flightLength = 60;
    movieLengths = [];

    expect(doTwoMovieLengthsEqualFlightLength(flightLength, movieLengths)).toBe(false)
  })

  test ('returns false if the only complementary movieLength is itself', () => {
    flightLength = 60;
    movieLengths = [30, 20, 20, 20, 60];

    expect(doTwoMovieLengthsEqualFlightLength(flightLength, movieLengths)).toBe(false)
  })

});