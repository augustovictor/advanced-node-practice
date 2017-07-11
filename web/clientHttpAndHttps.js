// Node as client to request http/https data
// Major classes in http module
// - http.Server - Used to create basic server. Child of net.Server/EE. EE = EventEmitter.
// - http.ServerResponse - Created internally by http.Server. Implement WritableStream/EE
// - http.Agent - Used to manage pulling sockets used in http clients requests. Node uses a globalAgent/new Agent() by default.
// - http.ClientRequest - When we initiate a http request. Implement WritableStream/EE
// - http.IncomingMessage - Implement ReadableStream/EE

const http = require('http'); // To make a https request we just replace 'http' -> 'https'

// http.ClientRequest
const req = http.request({
    hostname: 'www.google.com.br', // if the method was http.get(...) we'd have to include the http:// protocol before the url
    method: 'GET'
},res => { // http.IncomingMessage
    console.log(res.statusCode);

    res.on('data', data => {
        // console.log(data.toString());
        console.log('received');
    })
});

req.on('error', err => {
    console.log(err);
});

// http.Agent
req.end();


console.log(req.agent);