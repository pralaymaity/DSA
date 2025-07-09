// find the missing number in a sequece from 1 to N

// Input: [1, 2, 4, 5]
// Output: 3

let arr = [1, 3, 4, 5];

function missingNo(arr) {
  let sum = 0;
  let n = arr.length + 1;

  let expectedSum = (n * (n + 1)) / 2;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return expectedSum - sum;
}
console.log(missingNo(arr));
