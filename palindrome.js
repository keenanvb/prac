/*
check for a word that reads the same backward as forward
*/

let word = "level"; //radar

let checkPalindrome = (word) => {
    let flag = false;
    let letters = [];
    let wordBackwards = "";

    for (let i = 0; i < word.length; i++) {
        letters.push(word[i]);
    }

    for (let i = 0; i < word.length; i++) {
        wordBackwards += letters.pop();
    }

    if (word === wordBackwards) {
        flag = true;
    }

    return flag;
}

let result = checkPalindrome(word);

console.log(`Result: ${result}`)
