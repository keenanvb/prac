let santasList = ["Tom", "Errol", "Sam", "May", "Peter", "Jennifer", "Jen"];
let list = ["Errol", "Peter", "jennifer", "may", "jen"];

let slist = (santasList, children) => {
    let newSantasList = santasList.map(val => val.toLowerCase());
    let newChildren = children.map(val => val.toLowerCase());
    let niceList = [];
    let naughtyList = [];

    for (i = 0; i < newSantasList.length; i++) {
        let name = newSantasList[i];
        if (newChildren.indexOf(newSantasList[i]) > -1) {
            niceList.push(name.charAt(0).toUpperCase() + name.slice(1));
        } else {
            naughtyList.push(name.charAt(0).toUpperCase() + name.slice(1));
        }
    }

    return { 'nice list': niceList, 'naughty list': naughtyList };
}

console.log('list ', slist(santasList, list));