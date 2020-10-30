let arr = [5,8,9,55,44,22,115,5,1,6,8,4];

let bubbleSort = (arr) => {
    let swopped;

    do {
        swopped = false;
        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swopped = true;
            }

        }
    } while (swopped)

    return arr;
}

let sortedArr = bubbleSort(arr);

console.log('sortedArr ', sortedArr);