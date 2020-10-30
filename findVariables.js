/*
1x + 3y + 5z = 20
*/

let findValues = (n) => {
    let res = [];
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            for (let z = 0; z < n; z++) {
                if (1 * x + 3 * y + 5 * z === 10) {
                    res.push({ x, y, z })
                }
            }
        }
    }
    return res;
}

let result = findValues(1000);

console.log('result', result);

