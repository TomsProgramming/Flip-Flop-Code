const fs = require('fs');
const path = require('path');

const text = fs.readFileSync(path.join(__dirname, 'text.txt'), 'utf8');
const array = text.split("\n");

let count = 0;

array.forEach(text => {
    let newCount = 0;

    newCount += text.split("ba").length - 1;
    newCount += text.split("na").length - 1;
    newCount += text.split("ne").length - 1;

    if(newCount % 2 === 0) {
        count += newCount;
    }
});

console.log(count);