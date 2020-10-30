/*
Transfers files from one directory to another
*/
const fs = require('fs');
const path = require('path')
const { SHA256 } = require('crypto-js');

let documentConfig = {
    "hello.json": true,
    "hello.txt": true,
    "hello2.txt": false,
    "hello3.txt": true
}

let files = [];
/**
 * Read files in a directory
 * @param 
 * @returns 
 */
let readFiles = (filePath) => {
    let count = 0;
    return new Promise((resolve, reject) => {
        if (fs.existsSync('./' + filePath)) {
            fs.readdirSync('./' + filePath).forEach((document) => {
                if (documentConfig[document]) {
                    count++;
                    //let fileData = fs.readFileSync(__dirname + '/folder/' + document).toString('base64');
                    let fileData = fs.readFileSync(`${__dirname + '/' + filePath + '/' + document}`, 'utf-8');

                    let docHash = {
                        document,
                        fileData
                    }

                    let hash = letsHash(docHash);

                    let documentData = {
                        name: document,
                        file: fileData,
                        docHash: hash
                    }
                    files.push(documentData);
                }
            });
            if (files.length == count) {
                resolve('Read successful');
            } else {
                reject('Error: Read unsuccessful');
            }
        } else {
            reject('Folder does not exist')
        }
    })
}

/**
 * Writes files to a directory
 * @param 
 * @returns 
 */
let writeFiles = (filePath) => {
    return new Promise((resolve, reject) => {
        if (files.length == 0) {
            reject('There are no data for files')
        }
        files.forEach((file) => {
            if (!fs.existsSync(`./${filePath}`)) {
                fs.mkdirSync(`./${filePath}`);
            }
            fs.writeFileSync(`./${filePath}/` + file.name, file.file)
        });

        fs.writeFileSync(`./${filePath}/files.json`, JSON.stringify(files), 'utf-8');
        resolve('Write successful');
    });
}

let checkFile = async (filePath) => {
    return new Promise((resolve, reject) => {
        let data = fetchFileData(filePath);
        let checkData = {
            msg: '',
            data
        }

        if (data.length > 0) {
            fs.readdirSync(`./${filePath}`).forEach((document) => {

                if (document != 'files.json') {
                    let fileData = fs.readFileSync(__dirname + `/${filePath}/` + document, 'utf-8');
                    let docHash = {
                        document,
                        fileData
                    }
                    let hash = letsHash(docHash);

                    data.forEach((documentData, index) => {

                        if (documentData.docHash == hash) {
                            data.splice(index, 1)
                        }

                    })
                }
            });

            if (data.length > 0) {
                checkData.msg = 'There were files changed during the process';
                resolve(checkData);
            } else {
                checkData.msg = 'Documents successfully copied';
                resolve(checkData);
            }
            resolve(data);
        } else {
            reject('No files to compare from files.json')
        }

    });
};


let fetchFileData = (filePath) => {
    try {
        let fileData = fs.readFileSync(`./${filePath}/files.json`);
        return JSON.parse(fileData);
    } catch (e) {
        return [];
    }
}

let letsHash = (docHash) => {
    return SHA256(JSON.stringify(docHash)).toString()
}

(async () => {
    try {
        let read = await readFiles('folder');
        let write = await writeFiles('folder2');
        let check = await checkFile('folder2');
        console.log(read)
        console.log(write)
        console.log(check)
    } catch (error) {
        console.log('warning: ', error);
    }
})();

