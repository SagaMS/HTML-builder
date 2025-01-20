const fs = require('fs')
const path = require('path')    
const pathToText = path.join(__dirname, 'text.txt');



fs.readFile(pathToText, {encoding: 'utf-8'}, (err, data) => {
    if (err) throw err;
    console.log(data);
  });