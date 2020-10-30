/* prints out a times table for n */

let timesTable = (value, upToValue = true) => {
    if (upToValue) {
        for (let a = 1; a <= value; a++) {
            let res = ''
            for (let b = 1; b <= value; b++) {
                let spaces = (a * b).toString().length

                if (spaces > 2) {
                    res += `${a * b}  `
                } else if (spaces > 1) {
                    res += `${a * b}   `
                } else {
                    res += `${a * b}    `
                }

            }
            console.log(res)
            res = ''

        }
    } else {
        let res = ''
        for (let a = 1; a <= value; a++) {
            res += `${a * value} `
        }
        console.log(res)
    }

}

timesTable(12)