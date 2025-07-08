const fs = require('fs');
const path = require('path');

const text = fs.readFileSync(path.join(__dirname, 'text.txt'), 'utf8');
const array = text.split('');

let currentPoint = 0;

let movements = [];
let blueprint = [];
let highestPoint = 0;

array.forEach(text => {
    currentPoint += text === '^' ? 1 : -1;
    movements.push(text === '^' ? 'up' : 'down');
    blueprint.push(currentPoint);

    if(currentPoint > highestPoint) {
        highestPoint = currentPoint;
    }
});

console.log(movements);
console.log(blueprint);
console.log(highestPoint);