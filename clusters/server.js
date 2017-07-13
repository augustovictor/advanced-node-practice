// Clusters use the idea of forks
// It can be used to enable load balancing on an env with multiple CPU cores in ONE machine
// ONE fork per CPU.
// It can be done with PM2

// Server
const server = require('http').createServer();
const pid = process.pid;
let usersCount;

// Command to test ab -r -c200 -t10 http://localhost:3000/
// Results:
// Single core env: 26 req/sec
// Multi core env: 110 req/sec

server.on('request', (req, res) => {
    for(let i = 0; i < 1e7; i++);
    res.write(`Handled by process: ${pid}\n`);
    res.end(`Users: ${ usersCount }`);
});

server.listen(3000, () => {
    console.log(`Started process ${pid}`);
});

process.on('message', msg => {
    usersCount = msg.payload;
});