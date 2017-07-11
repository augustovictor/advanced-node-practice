const server = require('http').createServer();
const fs = require('fs');
const queryString = require('querystring');

const data = { name: 'Victor' };

server.on('request', (req, res) => {
    switch(req.url) {
        case '/home':
        case '/about':
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(fs.readFileSync(`.${req.url}.html`));
        break;

        case '/api':
            res.writeHead(200, { 'content-type': 'application/json' });
            res.end(JSON.stringify(data));
        break;

        case '/':
            res.writeHead(301, { 'Location': '/home' });
            res.end();
        break;

        case '/query-stringify':
            res.writeHead(200, { 'content-type': 'text/plain' });
            const objToStringify = { name: 'Victor Augusto', age: 25 };
            const resStringify = queryString.stringify(objToStringify);
            res.end(resStringify);
        break;

        case '/query-parse':
            res.writeHead(200, { 'content-type': 'application/json' });
            const stringToParse = 'name=Victor%20Augusto&age=25';
            const resParse = queryString.parse(stringToParse);
            res.end(JSON.stringify(resParse));
        break;

        default:
            res.writeHead(404, { 'content-type': 'text/plain' });
            res.end();

    }
})

server.listen(3000, () => {
    console.log('Listening on port 3000');
})