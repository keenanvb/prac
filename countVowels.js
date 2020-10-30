/*
Count the number of times a vowel (a,e,i,o,u) that appears and the position in a sentence
*/

let sentence = 'This is a sentence that contains some vowels. Check it out haha     ';
let sentenceToLower = sentence.trim().toLowerCase();
let countVowels = (sentence) => {
    let vowels = 'aeiou';
    let res = {}

    for (let i = 0; i < sentence.length; i++) {
        if (vowels.indexOf(sentence[i]) > -1) {
            let letter = sentence[i];
            if (res[letter] == undefined) {
                res[letter] = {
                    index: [i],
                    count: 1
                }
            } else {
                res[letter].index.push(i)
                res[letter].count = res[letter].count + 1
            }
        }
    }
    return res

}

console.log('count', JSON.stringify(countVowels(sentenceToLower), null, 2));