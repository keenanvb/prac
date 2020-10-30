// Converts time to words
const now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();


let timeToWords = (h, m) => {
    let words = ["zero", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen",
        "fourteen", "fifteen", "sixteen", "seventeen",
        "eighteen", "nineteen", "twenty", "twenty one",
        "twenty two", "twenty three", "twenty four",
        "twenty five", "twenty six", "twenty seven",
        "twenty eight", "twenty nine"];


    if (m === 0) {
        return `${words[h]} o' clock`
    } else if (m === 1) {
        return `one minute past ${words[h]}`
    } else if (m === 59) {
        return `one minute to ${words[(h % 12) + 1]}`
    } else if (m === 30) {
        return `half past ${words[h]}`
    } else if (m === 45) {
        return `quarter to ${words[(h % 12) + 1]}`
    } else if (m <= 30) {
        return `${words[m]} past ${words[h]}`
    } else if (m > 30) {
        return `${words[60 - m]} mintues to ${words[(h % 12) + 1]}`
    }

}

console.log('timeToWords: ', timeToWords(hours, minutes))