

const slasher = (arr, howMany) => {
    arr.splice(0, howMany);
    return arr
}

console.log('slasher', slasher([1, 2, 3], 2))