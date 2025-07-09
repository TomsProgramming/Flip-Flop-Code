const fs = require('fs');
const path = require('path');

const text = fs.readFileSync(path.join(__dirname, 'text.txt'), 'utf8');
const array = text.split("\n");

let countArray = [];

array.forEach(text => {
    text = text.trim();

    if(!countArray[text]) {
        countArray[text] = 1;
    } else {
        countArray[text]++;
    }
});

let rgb = '';
let countRgb = 0;

for (const [key, value] of Object.entries(countArray)) {
    if (value > countRgb) {
        countRgb = value;
        rgb = key;
    }
}

console.log(countArray);
console.log(rgb);
console.log(countRgb);
