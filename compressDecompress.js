//The string aabbbcccccaa compresses to a2b3c5a2. 
//Write the compression and decompression methods.

const compress = (str) => {
    let res = ''

    let count = 1
    for (let i = 0; i < str.length; i++) {

        let current = str[i];
        let next = str[i + 1];

        if (current === next) {
            count++
        } else {
            res += `${current}${count}`
            count = 1

        }
    }
    return res
}

const decompress = (str) => {
    let numbers = /[0-9]/g
    let res = ' '
    for (let i = 0; i < str.length; i++) {
        if (numbers.test(str[i])) {
            let num = parseInt(str[i])
            res += str[i - 1].repeat(num)
        }
    }
    return res
}

console.log('Compress', (compress('aabbbcccccaa')))
console.log('Decompress', (decompress('a2b3c5a2')))



