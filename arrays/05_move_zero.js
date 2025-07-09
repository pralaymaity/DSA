// Input:
//

// Expected Output:
// [1, 3, 12, 0, 0]

let arr = [0, 1, 0, 3, 12];

function moveZero(arr) {
  for (let i = 0; i <= arr.length -1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < 1) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}
console.log(moveZero(arr));

// another process ---------------------------------------------------------

// let arr = [0, 1, 0, 3, 12];

// function moveZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] === 0 && arr[j + 1] !== 0) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr;
// }

// console.log(moveZero(arr)); // [1, 3, 12, 0, 0]
