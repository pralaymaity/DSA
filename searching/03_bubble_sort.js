// bubble sort 

let arr = [15, 3, 9, 1, 55, 12, 10]

const bubbleSort = (arr)=>{

    for(let i = 0; i < arr.length; i++){

        for(let j = 0; j < arr.length - i -1; j++){

            if (arr[j] > arr[j+1]) {

                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }

    return arr

}

console.log(bubbleSort(arr));
