const fs = require('fs');
const path = require('path');

const text = fs.readFileSync(path.join(__dirname, 'text.txt'), 'utf8');
const array = text.split("\n");

let count = 0;

array.forEach(text => {
    if(text.split("ne").length - 1 === 0){
        count += text.split("ba").length - 1;
        count += text.split("na").length - 1;
        count += text.split("ne").length - 1;
    }
});

console.log(count);