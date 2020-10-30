let fs = require('fs');

let players = [
    { name: "Kev", lastName: "A", hobby: "Soccer" },
    { name: "Chad", lastName: "B", hobby: "Cricket" },
    { name: "Ashley", lastName: "C", hobby: "Rugby" }];

//Convert
function convertJsonToCSV(objArray) {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let header = Object.keys(array[0]);
    let str = `${header} \r\n`;

    for (let i = 0; i < array.length; i++) {
        let line = '';

        for (let index in array[i]) {

            if (line != '') {
                line += ','
            }

            line += array[i][index];
        }
        str += line + '\r\n';
    }

    return str;
}
let csv = convertJsonToCSV(players);

console.log(csv);
