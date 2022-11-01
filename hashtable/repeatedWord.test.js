'use strict';

const repeatedWord = require('./repeatedWord');

describe('Testing repeatedWord function', () => {

  test('Returns "a" from input 1', () => {

    let result = repeatedWord('Once upon a time, there was a brave princess who...');
    expect(result).toBe('a');
  });

  test('Returns "it" from input 2', () => {

    let result = repeatedWord('It was the best of times, it was the worst of times...');

    expect(result).toBe('it');
  });

  test('Returns "summer" from input 3', () => {

    let result = repeatedWord('It was a queer, sultry summer, the summer they electrocuted the...');

    expect(result).toBe('summer');
  });

  test('Returns null if no repeated words found', () => {
    let result = repeatedWord('There are no repeating words in this string');
    expect(result).toBe(null);
  });

  test('Returns repeated word regardless of punctuation', () => {
    let result = repeatedWord('The word we will repeat is ?w.o,r!d');
    expect(result).toBe('word');
  });
});
['It', 'was', 'the', 'best', 'of', 'times,', 'it', 'was', 'the', 'worst', 'of', 'times',]