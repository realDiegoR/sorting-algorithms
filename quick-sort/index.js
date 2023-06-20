import chalk from 'chalk';
import ARRAY from '../array-templates/100-array.js';

function partition (array, low, high) {
  console.log(chalk.magenta.bold(`Pivot is: ${array[high]}`))
  let i = low - 1;
  let j = low;

  while ( j < high) {
    if ( array[j] < array[high] ) {
      i++;
      if (i === j) {
        j++;
        continue;
      }
      console.log(`Moving ${array[i]} and ${array[j]} ...`);
      [ array[i], array[j] ] = [ array[j], array[i] ];
    }
    j++;
  }

  console.log(`FINISHED! Now moving pivot ${array[high]} and ${array[i + 1]} .`);
  console.log(`Before moving pivot: ${array}`);
  [ array[i + 1], array[high] ] = [ array[high], array[i + 1] ]

  console.error(chalk.green.bold(`Sorted array is: ${array.join(', ').replace(`${array[i + 1]}`, chalk.red.bold(`${array[i + 1]}`))} \n`))

  return i + 1;
}

function quickSort (array, low, high) {

  if (low < high) {
    const pi = partition(array, low, high);
    console.log(`Partition index is: ${pi}`)
    quickSort(array, low, pi -1);
    quickSort(array, pi + 1, high);
  }
}

console.time('sort')
quickSort(ARRAY, 0, ARRAY.length - 1)
console.timeEnd('sort')

console.log(chalk.blue(ARRAY))
