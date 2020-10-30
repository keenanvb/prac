/*
Sort an array
*/

let array = [1, 6, 8, 2, 1, 2, 4, 5, 4, 6, 3, 5]

let quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

let sortedArray = quickSort(array)

console.log('sorted: ', sortedArray);