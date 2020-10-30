
const getIndexToInsert = (arr, num) => {
    let newArry = arr;
    newArry.push(num);
    newArry.sort((a, b) => {
        return a > b ? 1 : -1
    })

    return arr.indexOf(num);
}

console.log('getIndexToInsert', getIndexToInsert([40, 60], 50))