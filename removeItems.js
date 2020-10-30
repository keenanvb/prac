/*
Filter items in a list based off another list
*/

let a = [1,2,3,4,5,6,7,10];

let b = [1,3,6,10];

let list = a.filter((item)=>!b.includes(item));

console.log(`List: ${list}`);

/*
Filter object based off a list

*/

let students = [
    {age:20,name: 'k',class: 'a'},
    {age:23,name: 'l',class: 'a'},
    {age:28,name: 'j',class: 'b'},
    {age:26,name: 'k',class: 'c'},
]

let absentStudent = ['l'];

let presentStudent = students.filter((item,pos)=>{
    return !absentStudent.includes(students[pos].name);
});

console.log('Present students: ',presentStudent)