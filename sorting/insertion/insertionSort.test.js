const {insertionSort} = require('./insertionSort');

let sampleArr = [8,4,23,42,16,15];

describe('This tests the ability to sort an array based on index values', () => {
  it('Should sort the array in ascending value order', () => {
    let insertSortTest = insertionSort(sampleArr);
    expect(insertSortTest).toEqual([4,8,15,16,23,42]);
  });
});


