
const bouncer = (arr) => {
    let newArray = arr.filter(truthyValues)
    return newArray
}

let truthyValues = (args) => {
    return Boolean(args);
}

console.log('bouncer', bouncer(['a', null, 1, false, undefined]))