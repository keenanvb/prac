/*
Find the position of x in matric 
*/

let matrix = [[10, 20, 30], [16, 26, 35], [27, 29, 37]];

let smallest = matrix[0][0];
let largest = matrix[2][2]

let x = 35

if (x === smallest || x === largest) {
    console.log('x is  found')
}

let i = 0, j = matrix.length - 1, flag = false;

let answer;

for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix.length; j++) {
        if (matrix[i][j] === x) {
            console.log('found')
            answer = {
                x: i,
                y: j
            }
        }
    }
}

console.log('answer', answer);
