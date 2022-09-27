'use strict';

// Write tests to prove the following functionality:

// Can successfully instantiate an empty linked list ✅
// Can properly insert into the linked list ✅
// The head property will properly point to the first node in the linked list ✅
// Can properly insert multiple nodes into the linked list ✅
// Will return true when finding a value within the linked list that exists ✅
// Will return false when searching for a value in the linked list that does not exist ✅
// Can properly return a collection of all the values that exist in the linked list ✅

const LinkedList = require('../index');

describe('Linked List Code Challenge 05', () => {
  let linkedListTest = new LinkedList;

  test('Can successfully instantiate an empty linked list', () => {
    expect(linkedListTest.head).toBeNull();
  });

  test('Can properly insert into the linked list', () => {
    linkedListTest.insert(1);
    expect(linkedListTest.head).toBeTruthy();
  });

  test('The head property will properly point to the first node in the linked list', () => {
    expect(linkedListTest.head.value).toBe(1);
    expect(linkedListTest.head.next).toBeNull;
  });

  test('Can property insert multiple nodes into the linked list', () => {
    linkedListTest.insert(2);
    linkedListTest.insert(3);
    expect(linkedListTest.head.value).toBe(3);
    expect(linkedListTest.head.next.value).toBe(2);
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    linkedListTest.insert(4);
    expect(linkedListTest.includes(4)).toBe(true);
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    linkedListTest.insert(5);
    expect(linkedListTest.includes(9999)).toBe(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    // This const is reflecting the values added using linkedListTest.insert from the above tests
    const collectionStringTest = `{${5}} -> {${4}} -> {${3}} -> {${2}} -> {${1}} -> NULL`;
    expect(linkedListTest.toString()).toBe(collectionStringTest);
  });
});

describe('Linked List Code Challenge 06', () => {
  let linkedListTest = new LinkedList;

  it('Can successfully add a node to the end of the linked list', () => {
    linkedListTest.append(10);

    expect(linkedListTest.head.value).toBe(10);
    expect(linkedListTest.head.next).toBe(null);
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    linkedListTest.append(15);
    linkedListTest.append(20);

    expect(linkedListTest.head.next.value).toBe(15);
    expect(linkedListTest.head.next.next.value).toBe(20);
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    linkedListTest.insertBefore(15, 25);

    expect(linkedListTest.head.next.value).toBe(25);
    expect(linkedListTest.head.next.next.value).toBe(15);
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    linkedListTest.insertBefore(10, 30);

    expect(linkedListTest.head.value).toBe(30);
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    linkedListTest.insertAfter(10, 35);

    expect(linkedListTest.head.next.next.value).toBe(35);
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    let insertAfterLastNode = new LinkedList;

    insertAfterLastNode.append(2);
    insertAfterLastNode.append(4);

    insertAfterLastNode.insertAfter(4, 8);

    expect(insertAfterLastNode.head.next.next.value).toBe(8);
  });
});