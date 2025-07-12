// how to calculate factorial using recursion


function factorial( n ) {

    if (n == 1) return 1

    //console.log(`${n} * ${n-1} = `);
    

    return n * factorial(n-1)
    
}

function main(){

    let result =  factorial(5);
    //console.log(result);
    
    return result

}

console.log(main());


// for debugging purpose----------------------------------------------------------

// function factorial(n) {
//     console.log(`Entering factorial(${n})`);

//     if (n == 1) {
//         console.log(`Base case reached: factorial(1) = 1`);
//         return 1;
//     }

//     const result = n * factorial(n - 1);

//     console.log(`Returning: ${n} * factorial(${n - 1}) = ${result}`);
//     return result;
// }

// function main() {
//     let result = factorial(5);
//     console.log(`Final result: ${result}`);
//     return 0;
// }

// main();
