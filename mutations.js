

let array = ['word', 'words'];

const mutation = (arr) => {
    arr.sort((a, b) => {
        return a.length < b.length ? 1 : -1
    })

    return arr[0].toLowerCase().split('').every(x => {
        return arr[1].toLowerCase().indexOf(x)
    })
}

console.log('mutation', mutation(array));
