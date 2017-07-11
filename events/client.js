const EventEmmiter = require('events');
const readLine = require('readline');

let command;
let args;

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new EventEmmiter();
const Server = require('./server')(client);

Server.on('response', response => {
    process.stdout.write('\u001B[2J\u001B[0;0f'); // Clear terminal
    process.stdout.write(response);
    process.stdout.write('\n\> ')
})

rl.on('line', input => {
    [command, ...args] = input.split(' ');
    client.emit('command', command, args);
})