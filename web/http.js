const server = require('http').createServer();

server.on('request', (req, res) => { // Happens every time a client connects to the server
    res.writeHead(200, { 'content-type': 'text/plain' });

    setTimeout(() => {
        res.write('Hello\n');
    }, 3000);

    setTimeout(() => {
        res.write('World!\n');
    }, 7000);
    //res.end('All done\n');
});

// Max time to wait between responses before closing connection
server.timeout = 3000; // The default timeout is 2 min

server.listen(3000, () => {
    console.log('Listening on port 3000');
});