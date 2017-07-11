const dgram = require('dgram'); // Implementation for udp datagram sockets

const server = dgram.createSocket('udp4'); // You can also use udp6

server.on('listening', () => {
    console.log('UDP server listening');
});

server.on('message', (msg, rinfo) => {
    console.log(`${rinfo.address}:${rinfo.port} - ${msg}`)
});

const PORT = 3000;
const HOST = '127.0.0.1';

server.bind(PORT, HOST); // It is an event emmiter


// Client
const client = dgram.createSocket('udp4'); // Every socket is created in a differnt port.

const message = Buffer.from('New message from client')

// client.send('New message from client', PORT, HOST, err => { // The first arg can be a buffer.
// client.send(message, 0, message.length, PORT, HOST, err => { // The first arg can be a buffer.
//     if(err) throw err;
//     console.log('UDP message sent');
//     client.close();
// });

// Sending the message in two steps
// client.send(message, 0, 11, PORT, HOST, err => {
//     if(err) throw err;
//     console.log('UDP message sent')
// });
// 
// client.send(message, 11, message.length, PORT, HOST, err => {
//     if(err) throw err;
//     console.log('UDP message sent')
//     client.close();
// });

// The first arg can also be an array of messages to send
client.send(['opa', 'hello', 'world'], PORT, HOST, err => {
    if(err) throw err;
    console.log('UDP array of messages sent');
    client.close();
})