/*
read,write and delete a file
*/
let fs = require('fs');

let readFile = () => {
    let res = fs.readFileSync(__dirname + '/notes.txt', 'utf8');
    let vowels = [{
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    }]
    for (let k = 0; k < res.length; k++) {
        switch (res[k]) {
            case 'a':
            case 'A':
                vowels[0].a++;
                break;
            case 'e':
            case 'E':
                vowels[0].e++;
                break;
            case 'i':
            case 'I':
                vowels[0].i++;
                break;
            case 'o':
            case 'O':
                vowels[0].o++;
                break;
            case 'u':
            case 'U':
                vowels[0].u++;
                break;
            default:
                //console.log('not here');
        }
    };

    return {
        res,
        count: res.trim().split(' ').length,
        vowels
    };
}

let writeFile = (text) => {
    fs.writeFileSync(__dirname + '/notes2.txt', text);
}

let getFileInfo = (filename) => {
    let stats = fs.statSync(filename)
    let size = stats["size"];
    let createdAt = stats["birthtime"];
    return {
        size,
        createdAt
    }
}

let info = getFileInfo(__dirname, '/notes.txt');
let printStatus = (status, result) => {
    let res = ''
    if (result == undefined) {
        res = status;
    } else {
        res = `${status}: ${result}`
    }
    console.log(res);

}

printStatus('reading file');
let text = readFile();
printStatus('writing to new file');
writeFile(text.res);
printStatus('Done');

console.log('---------------File in doc----------------');
printStatus('words count', `${text.count}`);
printStatus('vowels count', JSON.stringify(text.vowels));
console.log('------------------------------------------');


console.log('------------------------------------------');
console.log('---------------File info------------------');
printStatus('file size', `${info.size}`);
printStatus('created at', `${info.createdAt}`);
console.log('------------------------------------------');




fs.stat(__dirname+'/delete.txt', function (err, stats) {
    //file info
    // console.log(stats);
 
    if (err) {
        return console.error(err);
    }
 
    fs.unlink(__dirname+'/delete.txt',function(err){
         if(err) return console.log(err);
         console.log('file deleted successfully');
    });  
 });
// let text = fs.readFileSync(__dirname + '/notes.txt', 'utf8');

//fs.writeFileSync(__dirname + '/notes2.txt', text);

// fs.readFile(__dirname + '/notes.txt', 'utf8', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     let text = data + 'Im in notes 2'
//     console.log('text',text);
//     fs.writeFile(__dirname + '/notes2.txt', text, (err) => {
//         console.log('done');
//     });
// })

// let readStream = fs.createReadStream(__dirname + '/notes.txt', 'utf8');
// let writeStream = fs.createWriteStream(__dirname + '/notes2.txt');

// readStream.on('data',(chuck)=>{
//     console.log('data',chuck);
// })

// console.log('starting pipe');
// readStream.pipe(writeStream);