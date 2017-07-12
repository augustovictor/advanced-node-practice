const { spawn } = require('child_process');
const child = spawn('pwd'); // Child process instance which implements the EventEmitter API;

child.stdout.on('data', data => {
    console.log(`child stdout:\n${data}`);
});

child.stderr.on('data', data => {
    console.error(`child stderr:\n${data}`);
});

child.on('exit', (code, signal) => {
    console.log(`child process exited with code ${code}, signal ${signal}`); // Signal is null when the process exits normally
});

// Other events on child:
// disconnect - When the parent process calls the child disconnect method
// error - Process cannot be spawned or killed
// message [ Most important ] - When the child process uses the process.send method. This is how parent and child processes comunicate.
// close - When the standard IO of a child process get closed.

// Every child process gets 3 standard IO streams:
// child.stdin
// child.stdout
// child.stderr

