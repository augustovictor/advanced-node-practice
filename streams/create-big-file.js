const fs = require('fs');
const file = fs.createWriteStream('./big.file');

// Create a giant file
for(let i = 0; i <= 1e6; i++) {
    file.write(`
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
    `);
}
file.end();