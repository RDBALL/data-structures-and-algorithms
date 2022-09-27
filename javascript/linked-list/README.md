# Linked-List Code Challenges

## Code Challenge Class 05

### Features

- **Node**

- [x] Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

### Linked List

- [x] Create a Linked List class
- [x] Within your Linked List class, include a head property.
- [x] Upon instantiation, an empty Linked List should be created.

---

### The class should contain the following methods

- insert

- [x] Arguments: value
- [x] Returns: nothing

---
**- Adds a new node with that value to the head of the list with an O(1) Time performance.**

- includes

- [x] Arguments: value
- [x] Returns: Boolean

---
**- Indicates whether that value exists as a Node’s value somewhere within the list.**

- to string

- [x] Arguments: none
- [x] Returns: a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"

---

This assignment took about 6 hours to complete. Deciding how to test the linked list functions took the longest amount of time due to the need for debugging and it being the first time I've worked with linked-lists.

---

## Code Challenge Class 06

Extend a Linked List to allow various insertion methods.

- Feature Tasks
  - Write the following methods for the Linked List class:

- append
  - arguments: new value
  - adds a new node with the given value to the end of the list

- insert before
  - arguments: value, new value
  - adds a new node with the given new value immediately before the first node that has the value specified

- insert after
  - arguments: value, new value
  - adds a new node with the given new value immediately after the first node that has the value specified

### Approach & Efficiency

- For this lab I wanted to approach the solution with the viewpoint of simply extending the functionality of my previously established code (lab05). With that in mind, I researched the correct syntax to correctly implement each feature request for lab 06.
