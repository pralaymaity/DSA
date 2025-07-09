//find a unique element in an array where all others are repeated
// Input: [2, 3, 5, 4, 5, 3, 4]
// Output: 2

let arr = [2, 3, 5, 4, 5, 3, 4];

function removeRepeated(arr) {
  let unique;

  for (let i = 0; i <= arr.length - 1; i++) {
    let count = 0;

    for (let j = 0; j <= arr.length - 1; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count === 1) {
      unique = arr[i];
    }
  }
  return unique;
}
console.log(removeRepeated(arr));
