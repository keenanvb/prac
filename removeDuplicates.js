/*
Remove duplicate in the array

*/

let array = [1, 2, 1, 2, 4, 4, 5, 4, 5, 7, 4, 10, 7, 8,4];

let uniqueValues = array.filter((item, pos) => {
    return array.indexOf(item) == pos;
});

console.log('Unique values ',uniqueValues);