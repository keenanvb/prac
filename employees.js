
/*

Get all employees a certain age and over

*/

const obj = {
    companies: [
        {
            name: 'companyA',
            employees: [{
                name: 'k',
                age: 32
            },
            {
                name: 'l',
                age: 20
            }]
        },
        {
            name: 'companyB',
            employees: [{
                name: 'a',
                age: 32
            },
            {
                name: 's',
                age: 20
            }]
        },
        {
            name: 'companyC',
            employees: [{
                name: 'd',
                age: 38
            }]
        }

    ]
}


const employees = (selectedAge) => {
    const { companies } = obj


    let overObj = {}
    companies.forEach(({ name, employees }, index) => {
        over = [];
        let companyName = name
        employees.forEach(({ name, age }) => {
            if (age >= selectedAge) {
                over.push({
                    name,
                    age
                })
            }
        })
        if (overObj[companyName] == undefined) {
            overObj[companyName] = over
        } else {
            overObj[companyName].push(...over)
        }

    })
    return overObj
}



console.log('over overObj', employees(20));

