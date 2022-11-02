"use strict";

const HashTable = require('./index');

module.exports = function treeIntersection(tree1, tree2){
  let newHashTable = new HashTable(100);
  let duplicateArray = [];
  addToTable(tree1.root, newHashTable);
  checkIntersections(tree2.root, newHashTable, duplicateArray);
  return duplicateArray;
};

function addToTable(node, treeTable) {
  if (node) {
    treeTable.set(node.value.toString(), node.value);
    addToTable(node.left, treeTable);
    addToTable(node.right, treeTable);
  }
  return;
}

function checkIntersections(node, treeTable, set) {
  if (node) {
    if (treeTable.get(node.value.toString())) {
      set.push(node.value);
    }
    checkIntersections(node.left, treeTable, set);
    checkIntersections(node.right, treeTable, set);
  }
  return;
}
