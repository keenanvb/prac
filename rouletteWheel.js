/*models a roulette wheel*/
let obj = {}
let objRes = {}
let spins = 10000
let numbersOnBoard = 39
for (let i = 0; i <= spins; i++) {
    let ramdomNumber = Math.floor(Math.random() * numbersOnBoard) + 0
    if (obj[ramdomNumber] == undefined) {
        obj[ramdomNumber] = [ramdomNumber]
    } else {
        obj[ramdomNumber].push(ramdomNumber);
    }
}

Object.keys(obj).map((value) => {
    let objValue = obj[value]
    objRes[value] = `${(objValue.length * 100 / spins).toFixed(2)}%`
})

console.log('objRes', objRes);