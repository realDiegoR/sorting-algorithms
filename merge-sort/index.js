const ARRAY = require('../array-templates/300-array')

let recCount = 0
function mergeSort (array) {
  recCount++;
  console.log(`recursion number: ${recCount} ==> ${array}`)
  if (array.length <= 1) return array;

  const mid = Math.floor( array.length / 2 );
  const subArray1 = array.slice(0, mid);
  const subArray2 = array.slice(mid);

  return merge( mergeSort(subArray1), mergeSort(subArray2) )
}

function merge (leftArray, rightArray) {

  let finalArray = []

  while (leftArray.length > 0 && rightArray.length > 0) {
    console.log(`comparing ${leftArray} and ${rightArray} .....`)
    if (leftArray[0] < rightArray[0]) {
      finalArray.push(leftArray[0])
      leftArray.shift()
      continue;
    }

    finalArray.push(rightArray[0])
    rightArray.shift()
  }

  if (leftArray.length > 0) {
    finalArray.push(...leftArray)
  }

  if (rightArray.length > 0) {
    finalArray.push(...rightArray)
  }
  console.log(`returning sorted array: ${finalArray}`)
  return finalArray
}

console.time('sort')
const sortedArray = mergeSort(ARRAY)
console.timeEnd('sort')
console.log(sortedArray)
