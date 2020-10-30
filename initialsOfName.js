/*
Get initials of a name
*/

let name = 'Adam John';

let getinitials = (name) => {
    let initials = '';
    let waitingForSpace = false;
    for (letter of name) {
        if (!waitingForSpace) {
            initials += letter;
            waitingForSpace = true;
        }
        if (letter == ' ') {
            waitingForSpace = false;
        }
    };
    return initials;
}

let initials = getinitials(name);

console.log(`${name}: ${initials}`);