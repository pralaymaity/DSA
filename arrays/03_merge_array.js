// 3) merge two sorted array into one sorted array

/*Input:
arr1 = [1, 3, 5, 7]
arr2 = [2, 4, 6, 8]

Output:
[1, 2, 3, 4, 5, 6, 7, 8]*/

let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];

const mergeSort = (arr1, arr2) => {
  let index = 4;

  for (let i = 0; i < arr2.length; i++) {
    arr1[index] = arr2[i];
    index++;
  }

  let newArray = arr1;
//   console.log(newArray);

  for (let i = 0; i <= newArray.length - 1; i++) {
    for (let j = 0; j <= newArray.length - 1; j++) {
        
      if (newArray[j] > newArray[j + 1]) {

        let temp = newArray[j];
        newArray[j] = newArray[j + 1];
        newArray[j + 1] = temp;
      }
    //   console.log(newArray );
      
    }

  }

  return newArray;
};

console.log(mergeSort(arr1, arr2));
