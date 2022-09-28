'use strict';

const LinkedList = require('../index');

// -------------------------------------- LAB 05 --------------------------------------

describe('Linked List Code Challenge 05', () => {
  let newList = new LinkedList;

  test('Can successfully instantiate an empty linked list', () => {
    expect(newList.head).toBeNull();
  });

  test('Can properly insert into the linked list', () => {
    newList.insert(1);
    expect(newList.head).toBeTruthy();
  });

  test('The head property will properly point to the first node in the linked list', () => {
    expect(newList.head.value).toBe(1);
    expect(newList.head.next).toBeNull;
  });

  test('Can property insert multiple nodes into the linked list', () => {
    newList.insert(2);
    newList.insert(3);
    expect(newList.head.value).toBe(3);
    expect(newList.head.next.value).toBe(2);
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    newList.insert(4);
    expect(newList.includes(4)).toBe(true);
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    newList.insert(5);
    expect(newList.includes(9999)).toBe(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    const collectionStringTest = `{${5}} -> {${4}} -> {${3}} -> {${2}} -> {${1}} -> NULL`;
    expect(newList.toString()).toBe(collectionStringTest);
  });
});

// -------------------------------------- LAB 06 --------------------------------------

describe('Linked List Code Challenge 06', () => {
  let newList = new LinkedList;

  test('Can successfully add a node to the end of the linked list', () => {
    newList.append(10);

    expect(newList.head.value).toBe(10);
    expect(newList.head.next).toBe(null);
  });

  test('Can successfully add multiple nodes to the end of a linked list', () => {
    newList.append(15);
    newList.append(20);

    expect(newList.head.next.value).toBe(15);
    expect(newList.head.next.next.value).toBe(20);
  });

  test('Can successfully insert a node before a node located in the middle of a linked list', () => {
    newList.insertBefore(15, 25);

    expect(newList.head.next.value).toBe(25);
    expect(newList.head.next.next.value).toBe(15);
  });

  test('Can successfully insert a node before the first node of a linked list', () => {
    newList.insertBefore(10, 30);

    expect(newList.head.value).toBe(30);
  });

  test('Can successfully insert after a node in the middle of the linked list', () => {
    newList.insertAfter(10, 35);

    expect(newList.head.next.next.value).toBe(35);
  });

  test('Can successfully insert a node after the last node of the linked list', () => {
    let insertAfterLastNode = new LinkedList;
    insertAfterLastNode.append(2);
    insertAfterLastNode.append(4);
    insertAfterLastNode.insertAfter(4, 8);
    expect(insertAfterLastNode.head.next.next.value).toBe(8);
  });

  // -------------------------------------- LAB 07 --------------------------------------

  describe('Linked List Code Challenge 07', () => {
    let newList = new LinkedList();
    newList.insert(0);
    newList.insert(1);
    newList.insert(2);
    newList.insert(3);
    newList.insert(4);

    test('Find the node k positions from the end', () => {
      expect(newList.kthFromEnd(2)).toEqual(2);
    });

    test('Give exception when k is greater than the length of list', () => {
      expect(newList.kthFromEnd(6)).toEqual('Exception Returned');
    });

    test('Give exception when length of list and k are the same', () => {
      expect(newList.kthFromEnd(5)).toEqual('Exception Returned');
    });

    test('Give exception when k is negative', () => {
      expect(newList.kthFromEnd(-5)).toEqual('Exception Returned');
    });

    test('Functions when length of list is 1', () => {
      let oneNodeLength = new LinkedList();
      oneNodeLength.insert(1);
      expect(oneNodeLength.kthFromEnd(5)).toEqual('Exception Returned');
    });

    test('Find middle node', () => {
      expect(newList.middleNode()).toEqual(2);
    });
  });
});
