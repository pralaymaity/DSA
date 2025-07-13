// linear search

// let arr = [25, 4, 9, 93, 117, 84, 25, 30];
// let target = 90;

// function linearSearch(arr, target) {
//   let found = false;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       found = true;
//       console.log(`the index no is ${i}`);
//       break;
//     }
//   }
//   if (!found) {
//     console.log("element not found");
//   }

//   return 0;
// }

// console.log(linearSearch(arr, target));


//------------------------------------------------------------------------------

let arr = [25, 4, 9, 93, 117, 84, 25, 30];
let target = 90;

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log(`The index no is ${i}`);
      return;
    }
  }
  console.log("Element not found");
}

linearSearch(arr, target)