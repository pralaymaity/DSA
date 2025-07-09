//find the maximum streak of 1s in a  binary array

// Input: [1, 1, 0, 1, 1, 1, 0, 1]
// Output: 3

let arr = [1, 1, 0, 1, 1, 1, 0, 1];

function maxStreak(arr) {
  let count = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
    }

    if (arr[i] === 0) {
      count = 0;
    }

    if (count > max) {
      max = count;
    }
  }
  return max;
}
console.log(maxStreak(arr));
