// binary search-------------------------------

let arr = [-1, 0, 3, 4, 7, 9, 12];
let target = 0;

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = (start + end) / 2;

    if (target > arr[mid]) {
      start = mid + 1;
    } else if (target < arr[mid]) {
      end = mid - 1;
    }

    if (target == arr[mid]) {
      return mid;
    }
  }

  return -1;
}
console.log(binarySearch(arr, target));
