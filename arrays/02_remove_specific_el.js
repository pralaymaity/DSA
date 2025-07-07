//2) Remove specific element from the sorted array 

/*
nums = [1, 2, 3, 4, 3, 5, 3]

Output:
[1, 2, 4, 5]
*/

let nums = [1, 2, 3, 4, 3, 5, 3 , 5];

function remove(nums) {
  let store = [];
  
  let k = 0;

  for (let i = 0; i <= nums.length - 1; i++) {
    let count = 0;

    for (let j = 0; j <= nums.length - 1; j++) {
      if (i !== j && nums[i] === nums[j]) {
        count++;
      }
    }
    if (count === 0) {
      store[k] = nums[i];
      k++;
    }
  }
  return store;
}

console.log(remove(nums));