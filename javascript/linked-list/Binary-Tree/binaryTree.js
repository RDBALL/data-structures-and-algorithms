'use strict';

// Coded along with in-class demo for Binary Tree class methods/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  preOrder() {
    let treeResult = [];
    let traverse = (node) => {
      treeResult.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return treeResult;
  }

  inOrder() {
    let treeResult = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      treeResult.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return treeResult;
  }

  postOrder() {
    let treeResult = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      treeResult.push(node.value);
    };
    traverse(this.root);
    return treeResult;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
    this.root = null;
  }
  addNode(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (current) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    const traverse = (node) => {
      if (!node) {
        return false;
      }
      if (node.value === value) {
        return true;
      } else if (value < node.value) {
        return traverse(node.left);
      } else {
        return traverse(node.right);
      }
    };
    return traverse(this.root);
  }

  getMax(){
    let tempValueArray = [];
    const traverse = node => {
      tempValueArray.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    let maxValue = 0;
    tempValueArray.forEach(value => {
      if (value > maxValue) {
        maxValue = value;
      }
      return maxValue;
    });
    return maxValue;
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };

