/*
Check if a function is valid
*/
const str = '{{}{}{}{}}';

let checkBracks = (brackets) => {
    let num = 0;
    let flag = false;
    if (brackets.startsWith('{') && brackets.endsWith('}')) {
        for (let i of brackets) {
            if (i === '{') {
                num += 1;
            } else if (i === '}') {
                num -= 1;
            }
        }
    } else {
        return flag;
    }

    return isFuctionValid(num);
}

let isFuctionValid = (num) => {
    let check = false;
    check = (num === 0 ? true : false);
    return check;
}

let flag = checkBracks(str);

console.log(`Function valid: ${flag}`)