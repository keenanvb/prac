/*
Count the pais of different socks
*/

let arr = [10, 10, 10, 5, 5, 20, 20, 5, 20];

let socks = (arr) => {

    let sockArray = typeof (arr) == 'string' ? arr.split(' ') : arr;

    let sockResult = {}
    let pairs = 0;

    sockArray.forEach((sock) => {
        if (sockResult[sock] == undefined) {
            sockResult[sock] = [sock]
        } else {
            sockResult[sock].push(sock);
        }
    });

    Object.keys(sockResult).forEach((socks) => {
        let allSocks = sockResult[socks];
        let count = Math.floor(allSocks.length / 2);
        pairs += count
    })
    return pairs
};

let result = socks(arr);

console.log('result', result);