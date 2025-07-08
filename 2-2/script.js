const fs = require('fs');
const path = require('path');
const fibonacci = require('fibonacci');

const text = fs.readFileSync(path.join(__dirname, 'text.txt'), 'utf8');
const array = text.split('');

let currentPoint = 0;
let highestPoint = 0;

let upStreak = 0;
let downStreak = 0;

function endedStreak(streak, type) {
    if (streak > 0) {
        let currentPoints = Number(fibonacci.iterate(streak).number);
        currentPoint += type === 'up' ? currentPoints : -currentPoints;

        if(currentPoint > highestPoint) {
            highestPoint = currentPoint;
        }
    }
} 

array.forEach(text => {
    if (text === '^') {
        upStreak++;
        endedStreak(downStreak, 'down');
        downStreak = 0;
    } else {
        downStreak++;
        endedStreak(upStreak, 'up');
        upStreak = 0;
    }
});

endedStreak(upStreak, 'up');
endedStreak(downStreak, 'down');

console.log(highestPoint);