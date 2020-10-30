let numArray = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]
let strArray = ["a", "a", "b", "b", "b", "c", "d", "e"];


//finds if the array has duplicates
function findDuplicateInArray(array) {

    var object = {};
    var result = [];

    array.forEach(function (item) {
        if (!object[item])
            object[item] = 0;
        object[item] += 1;
    })

    for (var prop in object) {
        if (object[prop] >= 2) {
            result.push(prop);
        }
    }

    return result;
}

console.log(findDuplicateInArray(strArray));

//returns a list of duplicates
let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

console.log(findDuplicates(strArray))