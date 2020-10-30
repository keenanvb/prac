const convertToRoman = (num) => {

    let str = ''

    const romanToNum = {
        M: 1000,
        C: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    for (let key in romanToNum) {
        while (num >= romanToNum[key]) {
            str += key;
            num -= romanToNum[key]
        }
    }
    return str

}

console.log('convertToRoman', convertToRoman(1051));