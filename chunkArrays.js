

const checkArrayInGroups = (arr, size) => {

    let newArr = [];

    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, size + i));
    }

    return newArr;
}

console.log('checkArrayInGroups', checkArrayInGroups(['a', 'b', 'c', 'd', '2', '1', '1'], 2))

