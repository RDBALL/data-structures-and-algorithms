'use strict';

const LinkedList = require('./../index');

let input1 = new LinkedList();
input1.insert(1);
input1.insert(3);
console.log(input1.toString());

let input2 = new LinkedList();
input2.insert(2);
input2.insert(6);
input2.insert(8);

describe('Test zip list', () => {
  test('Should zip two lists', () => {
    input1.zipLists(input2);
    expect(input1.toString()).toEqual('{3} -> {8} -> {1} -> {6} -> {2} -> NULL');
  });
});
