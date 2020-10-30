const xlsx = require('xlsx');

//Excel file name
let workbook = xlsx.readFile('book.xlsx', {
    cellDates: true,
    password: ""
});

//Excel sheet name
let worksheet = workbook.Sheets['Sheet1']

let data = xlsx.utils.sheet_to_json(worksheet);


let newWorkbook = xlsx.utils.book_new();
let newWorkSheet = xlsx.utils.json_to_sheet(data);


xlsx.utils.book_append_sheet(newWorkbook, newWorkSheet, 'new data');

xlsx.writeFile(newWorkbook, 'newBook.xlsx');

