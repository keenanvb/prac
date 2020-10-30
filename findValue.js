/*
Find element in the array
 */

let array = [1,2,5,3,6,7,8,4,10];
let value = 5;

let findElement=(array,val)=>{
   let index = 0;
   let found = false;
   while(!found && index < array.length){
      if(array[index] == val){
         found = true;
      }
      index++;
   }
   if(!found){
      index = -1;
   }
   return index;
}

let found = findElement(array,value);

console.log(`Number found at: ${found}`)