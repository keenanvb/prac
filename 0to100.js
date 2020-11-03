/*
    Returns an array 0-100
*/

const count = () => {
   const result = [];
   for (let i = 100; i >= 0; i--) {
      result.push(100 - i);
   }
   return result;
};

const res = count();

console.log('res', res);
