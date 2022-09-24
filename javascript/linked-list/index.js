'use strict';

// Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Create a Linked List class
// Within your Linked List class, include a head property.

class LinkedList {
  constructor() {
    this.head = null;
  }

  // The class should contain the following methods: insert, includes, to string

  // ---------- insert ----------
  // Arguments: value
  // Returns: nothing
  // Adds a new node with that value to the head of the list with an O(1) Time performance.

  insert(value) {
    this.head = new Node(value, this.head);
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
