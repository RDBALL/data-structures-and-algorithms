'use strict';

const HashTable = require('./');

describe('Testing HashTable implementation', () => {
  let testTable = new HashTable(100);

  it('Setting a key/value pair creates a bucket in the HashTable', () => {
    testTable.set('Key', 'Value');

    expect(testTable.buckets).toEqual(expect.arrayContaining([expect.anything()]));
  });

  it('Retrieving based on a key returns the value stored', () => {
    let value = testTable.get('Key');

    expect(value).toBe('Value');
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    let value = testTable.get('bad-key');

    expect(value).toBe(null);
  });

  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    let keys = testTable.keys();

    expect(keys.includes('Key')).toBe(true);
  });

  it('Successfully handle a collision within the hashtable', () => {
    expect(testTable.hash('Key')).toBe(testTable.hash('Key'));
    testTable.set('Key', 'newValue');
    expect(testTable.buckets).toEqual(expect.arrayContaining([expect.anything()]));
  });

  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    let value = testTable.get('Key');

    expect(value).toBe('Value');
  });

  it('Successfully hash a key to an in-range value', () => {
    testTable.set('key', 'value');
    for (let i = 0; i < 1000; i++){
      testTable.set((Math.random().toString()), Math.random());
    }
    expect(testTable.buckets.length).toBe(100);
  });
});
