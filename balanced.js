const array = 'LRLRLR';
const balanced = (s) => {
   let rightCount = 0;
   let leftCount = 0;
   let count = 0;
   for (let i = 0; i < s.length; i++) {
      if (array.charAt(i).toLowerCase() === 'l') {
         leftCount++;
      } else {
         rightCount++;
      }

      if (rightCount === leftCount) {
         count++;
         leftCount = 0;
         rightCount = 0;
      }
   }

   return {
      count,
      leftCount,
      rightCount,
   };
};

console.log('balanced', balanced(array));
