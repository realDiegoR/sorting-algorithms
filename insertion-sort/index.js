import chalk from 'chalk';
import ARRAY from './../array-templates/10-array.js'

const insertionSort = (array, n) => {
  console.log(chalk.blue.bold(`Initial array: ${array}\n`))

  const newArray = [...array];
  let i, current, j;

  for (i = 1; i < n; i++) {
    console.log(chalk.blue.bold(`New pass. Array is: ${newArray.join(', ')}`))
    console.log(chalk.white.bold(`Index iteration is: ${chalk.magenta(i)}. Value is: ${chalk.red(newArray[i])}`))

    current = newArray[i];
    j = i - 1;

    while (j >= 0 && newArray[j] > current) {
      newArray[j + 1] = newArray[j];
      j--;
    }

    console.log(chalk.green.bold(`Inserting ${newArray[i]} after ${newArray[j]}\n`))
    newArray[j + 1] = current;
  }

  return newArray;
}

console.time('sort');
const sortedArray = insertionSort(ARRAY, ARRAY.length);
console.timeEnd('sort');

console.log(sortedArray.join('\n'));
