// Input:
// ["h", "e", "l", "l", "o"]

// Expected Output:
// ["o", "l", "l", "e", "h"]

let arr = ["h", "e", "l", "l", "o"]

function reverse(arr) {

    let store = []
    let j = 0

    for(let i = arr.length -1; i >= 0 ; i--){
        store[j] = arr[i]
        j++
    }
    return store
    

}
console.log(reverse(arr));
