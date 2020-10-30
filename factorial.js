
const factorial = (n) => {
    if (n === 1 || n === 0) {
        return 1;
    } else {

        return n * factorial(n - 1);
    }
}


const factorial2 = (n) => {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i
    }
    return res
}


console.log('factorial', factorial(5));
console.log('factorial2', factorial2(5));