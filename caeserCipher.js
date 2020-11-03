/*
Caesear Cipher - encode shift 11 
*/
const message = 'Hello there this is the message';

const encodeMessage = (message) => {
   const str = message.toUpperCase().split('').map(cipher).join('');
   return str;
};

let cipher = (letter) => {
   const symbolRegex = /[^a-zA-Z]/g; //all strings that contain a non letter

   if (symbolRegex.test(letter)) {
      return letter;
   }

   let codeAscii = letter.charCodeAt(0);

   if (codeAscii > 77) {
      codeAscii -= 13;
   } else {
      codeAscii += 13;
   }

   return String.fromCharCode(codeAscii);
};

console.log('encodeMessage', encodeMessage(message));
