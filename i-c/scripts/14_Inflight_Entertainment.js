const doTwoMovieLengthsEqualFlightLength = function (flightLength, movieLengths) {

  // initialize default result
  let doesMovieLengthComplementsExist = false;

  // initialize hash table to store info about each movie length
  let movieLengthsHash = {};

  // movieLengths.forEach((movieLength, idx) => {
  for (let idx = 0; idx < movieLengths.length; idx++) {
    let movieLength = movieLengths[idx];
    let movieLengthComplement = flightLength - movieLength;

    // Check if hash already contains a movieLength's complement at some other index
    if (movieLengthsHash[movieLengthComplement] && idx !== movieLengthsHash[movieLengthComplement][0]) {
      doesMovieLengthComplementsExist = true;
    }

    let metaData = [];

    // metaData contains index and complementary movie length
    metaData.push(idx);
    metaData.push(movieLengthComplement);

    // Store an array of metaData for each movieLength in the hash
    movieLengthsHash[movieLength] = metaData;
  };

  return doesMovieLengthComplementsExist;
}

module.exports = doTwoMovieLengthsEqualFlightLength;