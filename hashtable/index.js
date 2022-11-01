'use strict';

const LinkedList = require('../javascript/linked-list/');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  set(key, value) {
    let position = this.hash(key);
    let data = { [key]: value };

    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      bucket.append(data);
    } else {
      let bucket = new LinkedList();
      bucket.append(data);
      this.buckets[position] = bucket;
    }
  }

  get(key) {
    let position = this.hash(key);

    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      let current = bucket.head.value;
      while (!current[key]) {
        if (current.next === null) return null;
        current = current.next;
      }
      return current[key];
    } else {
      return null;
    }
  }

  has(key) {
    let position = this.hash(key);

    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      let current = bucket.head.value;
      while (!current[key]) {
        if (current.next === null) return false;
        current = current.next;
      }
      return true;
    }
  }

  keys() {
    let existingHashes = this.buckets.filter((bucket) => Boolean(bucket));
    let keys = [];
    existingHashes.forEach((linkedList) => {
      linkedList.traverse((nodeValue) => keys.push(Object.keys(nodeValue)[0]));
    });
    return keys;
  }

  hash(key) {
    let char = key.split('');
    let charSum = char.reduce((sum, char) => {
      return sum + char.charCodeAt(0);
    }, 0);

    return (charSum * 31) % 100;
  }
}

module.exports = HashTable;
