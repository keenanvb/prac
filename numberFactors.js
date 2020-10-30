/*
Write a program that lists the factors of any given number
*/
let number = 100;

let factor = (number) => {
    let factors = [];
    for (let i = 0; i < number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

let result = factor(number);
console.log(`The factors of ${number} is ${result}`);