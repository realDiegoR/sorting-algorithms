import chalk from 'chalk';
import ARRAY from '../array-templates/300-array.js';

let iterationCount = 0

function bubbleSort(array, n) {
  console.log(chalk.blue.bold(`Initial array: ${array}\n`))

  const newArray = [...array]
  let didSwap;

  do {
    console.log(chalk.blue.bold(`Starting pass...`));
    console.log(chalk.magenta.bold(`Array before pass is: ${newArray}`));

    didSwap = false;

    for (let i = 0; i < n - 1; i++) {
      if (newArray[i] > newArray[i + 1]) {
        console.log(chalk.red.bold(`Moving ${newArray[i]} and ${newArray[i + 1]}...`));
        [newArray[i], newArray[i + 1]] = [newArray[i + 1], newArray[i]]
        didSwap = true;
      }
    }

    console.log(chalk.white.bold(`Array after pass is: ${newArray}\n`));
    iterationCount++;
  }
  while (didSwap === true)

  return newArray;
}

console.time('sort')
const sortedArray = bubbleSort(ARRAY, ARRAY.length)
console.timeEnd('sort')
console.log(`Iteration count: ${iterationCount}`)
console.log(sortedArray)
