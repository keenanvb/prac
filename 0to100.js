/*
    Returns an array 0-100
*/

let count = () => {
   let result = [];
   for (let i = 100; i >= 0; i--) {
      result.push(100 - i);
   }
   //console.log(result);
   return result;
};

let res = count();

console.log('res', res);
