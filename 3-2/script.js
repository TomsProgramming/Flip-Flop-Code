const fs = require('fs');
const path = require('path');

const text = fs.readFileSync(path.join(__dirname, 'text.txt'), 'utf8');
const array = text.split("\n");

let countObject = {
    "Blue": 0,
    "Green": 0,
    "Red": 0,
    "Special": 0,
};

array.forEach(text => {
    text = text.trim();

    let rgb = text.split(',');

    let r = parseInt(rgb[0]);
    let g = parseInt(rgb[1]);
    let b = parseInt(rgb[2]);

    console.log(`R: ${r}, G: ${g}, B: ${b}`);

    
    if(r === g || r === b || g === b) {
        console.log("Special");
        countObject["Special"]++;
    }else if(r > g && r > b) {
        console.log("Red");
        countObject["Red"]++;
    }else if(g > r && g > b) {
        console.log("Green");
        countObject["Green"]++;
    }else if(b > r && b > g) {
        console.log("Blue");
        countObject["Blue"]++;
    }
});

console.log(countObject);