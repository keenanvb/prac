/*
Given an array of numbers, find the most frequently occurring number.
*/

const arr = [1, 2, 3, 4, 2, 2, 3, 4, 3, 4, 3, 2, 2, 4, 5, 6, 5, 2, 2, 6, 7, 5];

const getNum = (arr) => {
   let obj = {};
   let length = 0;
   let res;
   arr.forEach((val) => {
      if (obj[val] === undefined) {
         obj[val] = [val];
      } else {
         obj[val].push(val);
      }
   });

   Object.keys(obj).forEach((val) => {
      if (length < obj[val].length) {
         length = obj[val].length;
         res = {
            length,
            val,
         };
      }
   });
   return res;
};

const result = getNum(arr);

console.log('result', result.val);
