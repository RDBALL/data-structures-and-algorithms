'use strict';

const { BinarySearchTree } = require('../javascript/linked-list/Binary-Tree/binaryTree');
const treeIntersection = require('./treeIntersection');

describe('treeIntersection tests', () => {

  it('Returns array of equal values found in input tree1 and tree2', () => {
    let tree1 = new BinarySearchTree();
    tree1.add(150);
    tree1.add(100);
    tree1.add(250);
    tree1.add(75);
    tree1.add(160);
    tree1.add(200);
    tree1.add(350);
    tree1.add(125);
    tree1.add(175);
    tree1.add(300);
    tree1.add(500);
    let tree2 = new BinarySearchTree();
    tree2.add(42);
    tree2.add(100);
    tree2.add(15);
    tree2.add(160);
    tree2.add(200);
    tree2.add(350);
    tree2.add(125);
    tree2.add(175);
    tree2.add(500);

    let results = treeIntersection(tree1, tree2);

    expect(results).toStrictEqual([100,160,125,200,175,350,500]);
  });

  it('Returns empty array when the second tree is null.', () => {
    let tree1 = new BinarySearchTree();
    tree1.add(150);
    tree1.add(100);
    tree1.add(250);
    tree1.add(75);
    tree1.add(160);
    tree1.add(200);
    tree1.add(350);
    tree1.add(125);
    tree1.add(175);
    tree1.add(300);
    tree1.add(500);
    let tree2 = new BinarySearchTree();

    let results = treeIntersection(tree1, tree2);

    expect(results).toStrictEqual([]);
  });

  it('Returns empty array when the first tree is null.', () => {
    let tree1 = new BinarySearchTree();
    let tree2 = new BinarySearchTree();
    tree2.add(42);
    tree2.add(100);
    tree2.add(15);
    tree2.add(160);
    tree2.add(200);
    tree2.add(350);
    tree2.add(125);
    tree2.add(175);
    tree2.add(500);

    let results = treeIntersection(tree1, tree2);

    expect(results).toStrictEqual([]);
  });

});
