const sentence = 'This is a shooooort sentence';

const geLongestWord = (input) => {
   let longestWord = '';
   input.split(' ').forEach((word) => {
      if (longestWord.length < word.length) {
         longestWord = word;
      }
   });
   return longestWord;
};

const result = geLongestWord(sentence);
console.log('geLongestWord', result);
