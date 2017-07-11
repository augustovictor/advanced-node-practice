const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    // fs.readFile('./big.file', (err, data) => { // It loads the whole file to memory. WRONG
    //     if(err) throw err;
    //     res.end(data);
    // });

    const src = fs.createReadStream('./big.file');
    src.pipe(res);
});

server.listen(3000, () => {
    console.log('Listening on port 3000');
});