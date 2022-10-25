const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let lowestValue = arr[i];
    while ((j > -1) && (lowestValue < arr[j])) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = lowestValue;
  }
  return arr;
};

module.exports = { insertionSort };
