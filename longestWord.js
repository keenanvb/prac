let sentence = 'This is a shooooort sentence'

let geLongestWord = (sentence) => {
    let longestWord = '';
    sentence.split(' ').forEach((word) => {
        if (longestWord.length < word.length) {
            longestWord = word
        }
    })
    return longestWord
}

let result = geLongestWord(sentence)
console.log('geLongestWord', result)
