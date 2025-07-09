const fs = require('fs');
const path = require('path');

const text = fs.readFileSync(path.join(__dirname, 'text.txt'), 'utf8');
const array = text.split("\n");

let trashPoints = [];

array.forEach(text => {
    text = text.trim();

    let coords = text.split(',');
    let x = parseInt(coords[0]);
    let y = parseInt(coords[1]);
    
    let manhattanDistance = Math.abs(x - 0) + Math.abs(y - 0); 
    
    trashPoints.push({ x: x, y: y, manhattanDistance: manhattanDistance });
});

trashPoints.sort((a, b) => a.manhattanDistance - b.manhattanDistance);

let currentX = 0;
let currentY = 0;
let totalSteps = 0;

trashPoints.forEach(point => {
    totalSteps += Math.max(Math.abs(point.x - currentX), Math.abs(point.y - currentY));

    currentX = point.x;
    currentY = point.y;
});

console.log(`Total steps: ${totalSteps}`);