# Challenge Summary

Create a Binary Tree class and a Binary Search Tree class that extends the Binary Tree class.

## Approach & Efficiency

For this challenge I used the in-class demonstration (both live and recorded zoom lecture) to get a better understanding of how a binary tree can be traversed. I realized that in order to correctly traverse the tree with the given method, it was simply a matter using `.push()` at the correct time to add a node into an array when a method is executed.

Time Efficiency: O(n)

Space Efficiency: O(1)

## API

* Classes

```JS

BinaryTree

//methods

.preOrder() // returns an array -> Return the root, traverse left subtree, traverse right subtree

.inOrder() // returns an array -> Traverse left subtree, return the root, traverse right subtree

.postOrder() // returns an array -> Traverse left subtree, traverse right subtree, return root

BinarySearchTree

//methods

.addNode() // takes in a value and adds it to the tree

.contains() // searches tree to find if a node value === passed value

```
