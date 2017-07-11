// Command to generate key and cert
// openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes
// it generates cert.pem and key.pem in working directory

const fs = require('fs');
const server = require('https').createServer({
    // These can be buffers or strings
    key: fs.readFileSync('./key.pem'), // Private key. Use OpenSSL to generate it.
    cert: fs.readFileSync('./cert.pem')
    //pfx: // Combination of key and cert
});

server.on('request', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello World HTTPS!');
});

// 443 is the default port for https communication
server.listen(443, () => { // Use sudo to start server
    console.log('Https server running on port 3000');
})