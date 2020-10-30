const fs = require('fs');
let csv = fs.readFileSync(__dirname + '/questions.csv', 'utf8');

let list = csv.split('\n')

let obj = {};
let arrayObj = [];

list.forEach((element, index) => {
    let input = element;
    let result = input.indexOf(',');
    let category = input.substring(0, result);
    let question = input.substring((result + 1)); // remove the ,

    if (obj[category] === undefined) {
        obj[category] = [question]
    } else {
        obj[category].push(question);
    }

    //if we want an array of objects
    if (obj[category] !== undefined) {
        let objForList = { category, question };
        arrayObj.push(objForList);
    }
});


// console.log('obj', obj);
console.log('arrayObj', arrayObj);

fs.writeFileSync(__dirname + '/objectQz.json', JSON.stringify(arrayObj));