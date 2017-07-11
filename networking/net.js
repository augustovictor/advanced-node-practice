process.stdout.write('\u001B[2J\u001B[0;0f'); // Clear terminal

const server = require('net').createServer();
let socketId = 0;
let sockets = {};

const timestamp = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
}

const sendToAll = (senderSocket, message) => {
    Object.entries(sockets).forEach(([key, client]) => {
        if(senderSocket.id == key) return; // Do not self echo
        client.write(`${senderSocket.name} [${timestamp()}]: `);
        client.write(message);
    });
};

server.on('connection', socket => {
    socket.id = socketId++;
    
    console.log('Client connected');
    socket.write('Please enter your name :)\n');

    socket.on('data', data => { // Data is a buffer
        if(!sockets[socket.id]) {
            socket.name = data.toString().trim();
            sockets[socket.id] = socket;
            socket.write(`Welcome, ${socket.name} =D\nYou entered the room\n> `);
            sendToAll(socket, `Entered the room\n`);
            return;
        }

        sendToAll(socket, data);
    });

    socket.on('end', () => {
        delete sockets[socket.id];
        sendToAll(socket, `Client ${socket.name} disconnected`);
        console.log(`Client ${socket.name} disconnected`);
    });

    // socket.setEncoding('utf8'); // globally sets encoding
    
});

server.listen(3000, () => {
    console.log('Server bound');
});
// To start listening to this port: nc localhost 3000