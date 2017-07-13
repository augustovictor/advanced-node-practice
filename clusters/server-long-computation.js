const server = require('http').createServer();
const { longComputation } = require('./computation');
const { fork } = require('child_process');

// WRONG: This does not allow other requests to hit the server.
// server.on('request', (req, res) => {
//     if(req.url === '/comp-wrong') {
//         const sum = longComputation();
//         return res.end(`Sum is ${sum}`)
//     }
//     res.end('OK');
// });

server.on('request', (req, res) => {
    // WRONG: This does not allow other requests to hit the server.
    if(req.url === '/comp-wrong') {
        const sum = longComputation();
        return res.end(`Sum is ${sum}`)
    }

    // CORRECT: Move the heavy operation into another process using fork();
    else if(req.url === '/comp') {
        const computation = fork('./computation.js');
        computation.send('start');
        computation.on('message', sumResult => {
            return res.end(`Sum is ${sumResult}`)
        });
    } else {
        res.end('OK');
    }
});

server.listen(3000, () => {
    console.log('Listening on port 3000');
});