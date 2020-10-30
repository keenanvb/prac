/*
group an array of objects by key value.
*/

let groupBy = (arr, getKeyFn) => {
    let res = {};
    arr.forEach(item => {
        if (item[getKeyFn]) {
            let key = item[getKeyFn]
            if (res[key] == undefined) {
                res[key] = [item]
            } else {
                res[key].push(item);
            }
        } else {
            let objKeys = Object.keys(arr[0]);
            res['error'] = `Please provide a valid key: ${objKeys}`
        }
    });
    return res
}

var users = [{
    firstName: 'Sam',
    lastName: 'S'
}, {
    firstName: 'Keen',
    lastName: 'K'
}, {
    firstName: 'Sam',
    lastName: 'L'
}]

let group = groupBy(users, 'firstName');

console.log(JSON.stringify(group, undefined, 2));