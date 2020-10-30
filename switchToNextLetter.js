
// next letter, but if lower case change to upper case

const nextLetter = (str) => {
    return str.split('').map(convertToNextLetter).join('');
}

const convertToNextLetter = (elem) => {
    let nonLetter = /\W/g;  //match non symbols
    let numbers = /[0-9]/g; //match numbers
    let lowerCaserVowels = /[aeiou]/g // match vowels

    if (elem.match(nonLetter) || elem.match(numbers)) {
        return elem
    } else {
        let codeAscii = elem.charCodeAt(0);
        codeAscii += 1

        if (String.fromCharCode(codeAscii).match(lowerCaserVowels)) {
            return String.fromCharCode(codeAscii).toUpperCase()
        } else {
            return String.fromCharCode(codeAscii)
        }
    }
}

console.log('next letter', nextLetter('abcd1'))