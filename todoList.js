/*
Todo list
*/

let list = [];

let addwhere = (item, list, placement) => {
    console.log(`Item Added: ${item}`);
    console.log(`Item Added at: ${placement}`);

    list.splice(placement - 1, 0, item);
}

let add = (item, list) => {
    console.log(`Item Added: ${item}`);
    list.push(item);
}

let remove = (item, list) => {
    let index = list.indexOf(item);
    if (index > -1) {
        list.splice(index, 1);
        console.log(`Item removed: ${item}`);
    } else {
        console.log(`Item does not exsist in list: ${item}`);
    }
}

add('Food', list);
add('Code', list);
addwhere('Code 2', list, 2);
add('Eat', list);
add('Sleep', list);
remove('Sport', list);
remove('Sleep', list);

console.log(`Todo List ${list}`);