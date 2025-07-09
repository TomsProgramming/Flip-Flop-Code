const fs = require('fs');
const path = require('path');

const text = fs.readFileSync(path.join(__dirname, 'text.txt'), 'utf8');
const array = text.split("\n");

let currentX = 0;
let currentY = 0;

let steps = 0;

array.forEach(text => {
    text = text.trim();

    let coords = text.split(',');
    let x = parseInt(coords[0]);
    let y = parseInt(coords[1]);
    
    steps += Math.max(Math.abs(x - currentX), Math.abs(y - currentY));

    currentX = x;
    currentY = y;
});

console.log(`Total steps: ${steps}`);