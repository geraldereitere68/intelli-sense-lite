// Filename: complexCode.js
// Description: Executes a complex algorithm to find the maximum sum of a subarray in a given array

// Function to find the maximum sum of a subarray using the Kadane's algorithm
function findMaxSubarraySum(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array.');
  }
  
  if (arr.length === 0) {
    throw new Error('Array must have at least one element.');
  }
  
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  
  return maxSoFar;
}

// Test cases
const testArray1 = [1, -2, 3, 4, -5, 6, -7, 8, 9];
const testArray2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const testArray3 = [5, -9, 6, -2, 3];
const testArray4 = [3, -6, 2, -9, -1, 7, 5];

console.log(`Maximum sum of subarray in ${JSON.stringify(testArray1)}: ${findMaxSubarraySum(testArray1)}`);
console.log(`Maximum sum of subarray in ${JSON.stringify(testArray2)}: ${findMaxSubarraySum(testArray2)}`);
console.log(`Maximum sum of subarray in ${JSON.stringify(testArray3)}: ${findMaxSubarraySum(testArray3)}`);
console.log(`Maximum sum of subarray in ${JSON.stringify(testArray4)}: ${findMaxSubarraySum(testArray4)}`);