/*
Get the minimum, max, average & mode of the arrary
*/

// Min value
let numList = [1, 1, 2, 2, 2, 2, 2, 5, 5, 10, 2, 2, 2, 5, 10, 1, 2];

const getMinValue = (arr) => {
    let hold = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < hold) {
            hold = arr[i];
        }
    }
    return hold;
}
let minValue = getMinValue(numList);
console.log(`Smallest value in list : ${minValue}`);

// Max value
const getMaxValue = (arr) => {
    let hold = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > hold) {
            hold = arr[i];
        }

    }
    return hold;
}
let maxValue = getMaxValue(numList);
console.log(`max value in list : ${maxValue}`);

//  Find average value
const findAvgValue = (arr) => {
    let sum = 0;
    const length = arr.length;
    let avg = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    avg = sum / length;
    return avg.toFixed(2);
}
let avgValue = findAvgValue(numList);
console.log(`Average value in list : ${avgValue}`);

//  Find mode value
const getModeValue = (arr) => {
    var obj = {};
    var mode = 0;
    var highestFreq = 0;

    for (var i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }

    for (var j = 0; j < arr.length; j++) {
        if (obj[arr[j]] > highestFreq) {
            highestFreq = obj[arr[j]];
            mode = arr[j];
        }
    }


    if (highestFreq !== 1) {
        return mode;
    }
    return -1;
}

let modeValue = getModeValue(numList);
console.log(`Mode value in list : ${modeValue}`);



