'use strict';

const { BinaryTree, BinarySearchTree, Node } = require('./binaryTree');

describe('Testing the Tree class', () => {
  let testBinaryTree;

  test('Creating a tree, expecting the root to be null since no value was passed to it', () => {
    testBinaryTree = new BinaryTree();
    expect(testBinaryTree.root).toBe(null);
  });

  test('Creating a tree with a value passed to the root node', () => {
    testBinaryTree.root = new Node(10);

    expect(testBinaryTree.root.value).toBe(10);
    expect(testBinaryTree.root.left).toBe(null);
    expect(testBinaryTree.root.right).toBe(null);
  });

  test('Testing pre-order traversal functionality', () => {
    testBinaryTree.root.right = new Node(15);
    testBinaryTree.root.left = new Node(5);
    testBinaryTree.root.right.right = new Node(20);

    expect(testBinaryTree.preOrder()).toEqual([10, 5, 15, 20]);
  });

  test('Testing in-order traversal functionality', () => {
    expect(testBinaryTree.inOrder()).toEqual([5, 10, 15, 20]);
  });

  test('Testing post-order traversal functionality', () => {
    expect(testBinaryTree.postOrder()).toEqual([5, 20, 15, 10]);
  });
});

describe('Testing the Binary Search Tree class', () => {
  let testBinarySearchTree = new BinarySearchTree();

  test('Creating a tree with leafs branching from root node', () => {
    testBinarySearchTree.addNode(2);
    testBinarySearchTree.addNode(1);
    testBinarySearchTree.addNode(3);

    expect(testBinarySearchTree.root.value).toBe(2);
    expect(testBinarySearchTree.root.left.value).toBe(1);
    expect(testBinarySearchTree.root.right.value).toBe(3);
  });

  test('Test if tree contains passed value', () => {
    expect(testBinarySearchTree.contains(3)).toBe(true);
  });

  test('Test to confirm false is returned if value passes is not contained in tree', () => {
    expect(testBinarySearchTree.contains(10)).toBe(false);
  });
});
