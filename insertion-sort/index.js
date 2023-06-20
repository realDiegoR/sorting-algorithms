const ARRAY = require('./../array-templates/300-array')

const insertionSort = (array, n) => {
  const newArray = [...array];
  let i, current, j;

  for (i = 1; i < n; i++) {
    current = newArray[i];
    j = i - 1;

    while (j >= 0 && newArray[j] > current) {
      newArray[j + 1] = newArray[j];
      j--;
    }

    newArray[j + 1] = current;
  }

  return newArray;
}

console.time('sort');
const sortedArray = insertionSort(ARRAY, ARRAY.length);
console.timeEnd('sort');

console.log(sortedArray.join('\n'));
