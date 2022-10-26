'use strict';

function mergeSort(array) {

  if (array.length > 1) {
    let temp = [...array];
    let mid = Math.ceil(array.length / 2);
    let left = temp.splice(0, mid);
    let right = temp;

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right);
  } else {
    return array;
  }
}
function merge(left, right) {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  if (left.length === 0) {
    result.push(...right);
  } else {
    result.push(...left);
  }
  return result;
}

module.exports = { mergeSort };
