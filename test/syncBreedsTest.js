// const bombay = breedDetails('Bombay');
// console.log(bombay); //=> prints out the description for that breed

const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

describe('#breedDetails', () => {
  it('returns breed details for the Bombay breed', () => {
    // We expect it to be a function, but will it be?
    const bombay = breedDetails('Bombay');
    console.log(bombay);
  });
});