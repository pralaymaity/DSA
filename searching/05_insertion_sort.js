let arr = [15, 1, 9, 3, 55, 12, 10];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let next = arr[i];
    let prev = i - 1;

    while (prev >= 0 && arr[prev] > next) {
      arr[prev + 1] = arr[prev];
      prev--;
    }

    arr[prev + 1] = next;
  }

  return arr;
};
console.log(insertionSort(arr));
