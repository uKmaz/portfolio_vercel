const fs = require('fs');
const pdfParse = require('pdf-parse');

let dataBuffer = fs.readFileSync('public/Emre_Uçmaz_CV_SE.pdf');

pdfParse(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(err => console.error(err));
