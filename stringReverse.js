let str = 'hello';

let reverseString = (str) => {
    let strArray = str.split('');
    let strReverse = [];
    // let strReverse = strArray.reverse()

    strArray.forEach((letter, index) => {
        strReverse.unshift(strArray[index]);
    })

    return strReverse.join('');
}

console.log('string reverse: ', reverseString(str));


