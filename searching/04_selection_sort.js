// selection sort

let arr = [15, 1, 9, 3, 55, 12, 10];


const selectionSort = (arr) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
};
console.log(selectionSort(arr));
