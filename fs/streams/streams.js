const fs = require('fs');

let readStream = fs.createReadStream('../notes.txt', 'utf-8');
let writeStream = fs.createWriteStream('./copiedNotes.txt');

readStream.on('data', (fileData) => {
    writeStream.write(fileData);
});

//Or pipe the result
readStream.pipe(writeStream);