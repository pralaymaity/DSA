//sum of element in an array using recursion

let arr = [5,3,2,0,10]

function main(n) {

    if (n == 0) return arr[n]

    return arr[n] + main(n - 1)
    
}
console.log(main(arr.length - 1));




