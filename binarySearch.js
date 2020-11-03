/*
Check if a number exsits in an array

*/

const numList = [2, 1, 5, 6, 8, 4, 3, 7, 9, 12, 10, 15, 11, 14, 18, 17, 13, 16, 19, 20];

const value = 18;
let counter = 0;

// sort array asc order
const newArr = numList.sort((x, y) => {
   return x - y;
});

// search for value
const binarySearch = (val, array) => {
   let first = 0;
   let last = array.length - 1;
   let mid = 0;
   while (last >= first) {
      mid = Math.floor((first + last) / 2);
      if (array[mid] === val) {
         // check to see if the middle value is = to the value
         return array[mid];
      } else if (val < array[mid]) {
         last = mid - 1; // eliminate last value
         console.log(last);
         counter++;
      } else {
         first = mid + 1; // eliminate first value
         console.log(first);
         counter++;
      }
   }
   return -1; // value not found
};

const isFound = binarySearch(value, newArr);

console.log(`Binary search value found: ${isFound} there were ${counter} iterations`);
