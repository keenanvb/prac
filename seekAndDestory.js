
function destoryer(arr) {
    let args = Array.from(arguments);
    for (let i = 0; i < args[0].length; i++) {
        for (let j = 1; j < args.length; j++) {
            if (args[0][i] == args[j]) {
                delete args[0][i]
            }
        }
    }

    return args[0].filter((x) => {
        return Boolean(x)
    })
}

console.log('destoryer ', destoryer([1, 2, 3, 4, 1, 2, 2, 2, 2], 2, 3))
