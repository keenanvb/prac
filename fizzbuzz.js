/*
Fizzbuzz
Write a program that prints the integers from 1 to 100, but multiples of 3 print Fizz,
for multiples of 5 print Buzz & for multiples of both 3 and 5 print FizzBuzz
*/

let fizzbuzz = () => {
    let length = 100
    for (let i = 1; i <= length; i++) {
        if (i % 15 === 0) {
            console.log(`${i} FizzBuzzz`);
        } else if (i % 3 === 0) {
            console.log(`${i} Fizz`);
        } else if (i % 5 === 0) {
            console.log(`${i} Buzz`)
        } else {
            console.log(i);
        }
    }
}

fizzbuzz();