// find max number in number array without using Math.max()
function findMaxNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Example usage:
const numbers = [1, 5, 3, 9, 2];
const maxNumber = findMaxNumber(numbers);
console.log(maxNumber); // Output: 9

// using Math.max()
function findMaxNumber(arr) {
  return Math.max(...arr);
}
