/*
Order alphabetical - letters of a word 
*/

let word = 'alphabetical';

let order = (word) => {
    let res = word.split('');

    res.sort((x, y) => x > y ? 1 : -1);

    let result = res.join();

    return result;
}

console.log('order: ',order(word));