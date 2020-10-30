/* Sort by age, if name is the same sort by age asc
   Sort by a given list
*/

let hobbyOrderList = ['soccer', 'rugby', 'cricket', 'golf', 'tennis'];

let list = [{
        name: 'Keen',
        age: 20,
        hobbies: 'soccer'
    },
    {
        name: 'Keen',
        age: 23,
        hobbies: 'cricket'
    },
    {
        name: 'Ash',
        age: 19,
        hobbies: 'rugby'
    },
    {
        name: 'Adam',
        age: 18,
        hobbies: 'soccer'
    },
    {
        name: 'Sky',
        age: 30,
        hobbies: 'tennis'
    },
    {
        name: 'Kris',
        age: 26,
        hobbies: 'soccer'
    },
    {
        name: 'Kyle',
        age: 28,
        hobbies: 'golf'
    },
]

let sortList = (list) => {
    let response = '';
    response = list.sort((x, y) => {
        return x.name > y.name ? 1 : -1;
    });

    response = list.sort((x, y) => {
        if (x.name == y.name) {
            return x.age < y.age ? 1 : -1;
        }
    });

    return response;
}

let hobbySort = (list, order) => {
    let response = '';
    response = list.sort((x, y) => {
        let A = x.hobbies, B = y.hobbies;
        return order.indexOf(A) > order.indexOf(B) ? 1 : -1;
    });
    return response;
}

let sortedList = sortList(list);

let sortedHobbyList = hobbySort(list,hobbyOrderList);
console.log('sortedHobbyList',sortedHobbyList);

//console.log('sorted list', sortList(list));