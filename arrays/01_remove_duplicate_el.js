// 1) Remove duplicates element from the sorted array ------------------------------------

/* Input:
 nums = [1, 1, 2, 2, 3, 4, 4, 5]

 Output:
 [1, 2, 3, 4, 5] */

//  let nums = [1, 1, 2, 2, 3, 4, 4, 5]

function duplicates (nums){
    let store = []
    let  j = 0
    for(let i =0; i<= nums.length -1; i++){

        if ( nums[i] === nums[i+1]) {
            continue
        }
        else{
            store[j] = nums[i]
            j++
        }
    }
    return store

}
console.log(duplicates(nums));

// another process

/*let nums = [1, 1, 2, 2, 3, 4, 4, 5];

function duplicates(nums) {
    let store = [];
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            store[j] = nums[i];
            j++;
        }
    }

    return store;
}

console.log(duplicates(nums)); // Output: [1, 2, 3, 4, 5] */


