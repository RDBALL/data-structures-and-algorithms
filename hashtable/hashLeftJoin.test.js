'use strict';

const HashTable = require('./index');
const hashLeftJoin = require('./hashLeftJoin');

describe('hashLeftJoin tests', () => {
  it('Returns array of synonym and antonym key value pairs', () => {
    let table1 = new HashTable(10);
    let table2 = new HashTable(10);
    table1.set('diligent', 'employed');
    table1.set('fond', 'enamored');
    table1.set('guide', 'usher');
    table2.set('diligent', 'idle');
    table2.set('fond', 'averse');
    table2.set('guide', 'follow');

    let results = hashLeftJoin(table1, table2);

    expect(results).toStrictEqual([
      { key: 'diligent', keyAntonym: 'idle', keySynonym: 'employed' },
      { key: 'fond', keyAntonym: 'averse', keySynonym: 'enamored' },
      { key: 'guide', keyAntonym: 'follow', keySynonym: 'usher' },
    ]);
  });

  it('Only sets table2 items when they occur in table1', () => {
    let table1 = new HashTable(10);
    let table2 = new HashTable(10);
    table1.set('diligent', 'employed');
    table1.set('fond', 'enamored');
    table2.set('diligent', 'idle');
    table2.set('fond', 'averse');
    table2.set('guide', 'follow');

    let results = hashLeftJoin(table1, table2);

    expect(results.length).toBe(2);
  });

  it('Returns array of table1 key, value pairs', () => {
    let table1 = new HashTable(10);
    let table2 = new HashTable(10);
    table1.set('diligent', 'employed');
    table1.set('fond', 'enamored');
    table1.set('guide', 'usher');

    let results = hashLeftJoin(table1, table2);

    expect(results.length).toBe(3);
  });

  it('Returns empty array without table1 input', () => {
    let table1 = new HashTable(10);
    let table2 = new HashTable(10);
    table2.set('diligent', 'idle');
    table2.set('fond', 'averse');
    table2.set('guide', 'follow');

    let results = hashLeftJoin(table1, table2);
    expect(results).toStrictEqual([]);
  });
});
