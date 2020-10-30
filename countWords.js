/*
Count the number of words in a sentence
*/

let sentence = 'This is a sentence that contains some words. Check it out haha     ';
console.log('a',sentence.trim());
let wordCount = (sentence) => {
    return sentence.trim().split(' ').length;
}

let count = wordCount(sentence);

console.log(`This sentence contains ${count} words`);