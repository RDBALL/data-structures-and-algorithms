'use strict';

// ---------- Create a Node class ----------
// This class has properties for the value stored in the Node, and a pointer to the next Node.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// ---------- Create a Linked List class ----------
// Within your Linked List class, include a head property.

class LinkedList {
  constructor() {
    this.head = null;
  }

  // The class should contain the following methods: insert, includes, to string


  //  ---------- append ----------
  // arguments: new value
  // adds a new node with the given value to the end of the list

  append(value) {
    let appendNode = new Node(value);
    if (this.head === null) {
      this.head = appendNode;
      return;
    }
    let current = this.head;
    if (current.next !== null) {
      current = current.next;
    }
    current.next = appendNode;
  }

  // ---------- insert ----------
  // Arguments: value
  // Returns: nothing
  // Adds a new node with that value to the head of the list with an O(1) Time performance.

  insert(value) {
    this.head = new Node(value, this.head);
  }

  // ---------- insert before ----------
  // arguments: value, new value
  // adds a new node with the given new value immediately before the first node that has the value specified

  insertBefore(searchValue, newValue) {
    if (this.head.value === searchValue) {
      this.head = new Node(newValue, this.head);
      return;
    }

    let current = this.head;
    while (current.next.value !== searchValue) {
      current = current.next;
    }
    current.next = new Node(newValue, current.next);
  }

  // ---------- insert after ----------
  // arguments: value, new value
  // adds a new node with the given new value immediately after the first node that has the value specified

  insertAfter(searchValue, newValue) {
    let current = this.head;
    while (current.next !== null && current.value !== searchValue) {
      current = current.next;
    }
    current.next = new Node(newValue, current.next);
  }

  // ---------- includes ----------
  // Arguments: value
  // Returns: Boolean
  // Indicates whether that value exists as a Node’s value somewhere within the list.

  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  // ---------- to string ----------
  // Arguments: none
  // Returns: a string representing all the values in the Linked List, formatted as:
  // "{ a } -> { b } -> { c } -> NULL"

  toString() {
    let current = this.head;
    let string = '';
    while (current !== null) {
      string += `{${current.value}} -> `;
      current = current.next;
    }
    return string + 'NULL';
  }
}


module.exports = LinkedList;
