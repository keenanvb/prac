const fs = require('fs');
const path = require('path');
const archiver = require('archiver');


//zip files in folder
let zipFiles = (source, destination) => {
    return new Promise((resolve, reject) => {
        let output = fs.createWriteStream(__dirname + destination);
        let archive = archiver('zip', {
            zlib: { level: 9 }
        });
        output.on('close', function () {
            console.log(archive.pointer() + ' total bytes');
            console.log('archiver has been finalized and the output file descriptor has closed.');
        });
        archive.directory(source, false);
        archive.pipe(output);
        archive.finalize();
        resolve('zip complete');
    });
}

//delete the file the orginal folder after zip
let deleteAllFilesInFolder = (filePath) => {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(filePath)) {
            fs.readdirSync(filePath).forEach((file, index) => {
                let currentPath = path.join(filePath, file);
                if (fs.lstatSync(currentPath).isDirectory()) {
                    deleteAllFilesInFolder(currentPath);
                } else {
                    fs.unlinkSync(currentPath);
                }
            });
            fs.rmdirSync(filePath);
        }
        resolve('folder successfully deleted');
    })
}

let start = async () => {
    let zip = await zipFiles('zipThisFolder/', '/zippedFiles.zip');
    let deleteFolder = await deleteAllFilesInFolder('./zipThisFolder');

    console.log(zip);
    console.log(deleteFolder);
}

start();


