console.log('Initing process');

// while(1) {
//     const a = '123';
// }
// // Ex 1 - Event loop
// process.on('exit', (code) => {
//     // Sync operations only
//     // It executes before node processes terminate
//     console.log('Unregister service: ', code);
// });

// process.on('uncaughtException', (err) => {
//     // Do any clean up and exit anyway.
//     console.error(err);
//     process.exit(1);
// });

// // Keep event loop busy
// process.stdin.resume();

// console.dog();

// Ex 2 - Buffer. Used tp work with binary streams of data. It is a chunk of memory allocated out of V8
// Useful when we need to read images.
// Use StringDecoder if receiving UTF-8 bytes in a stream

// Ex 3 - Require
// Resolving - Find absolute file path of a module
//console.log(module);
// require.resolve('module-name'); // Used to check if an optional package is installed. It does not execute the file.
require('./pkg');
exports.id = 'asdf';
exports.concent.push('aaddddaaaaaa');

// Loading - Content of the resolved path. node addon c++
// require('something');

// 1. try something.js
// 2. try something.json // parse
// 3. try something.node // binary

// Wrapping - Gives module its private scope


// Evaluating - What the VM does with the code


// Caching - When the module is required again, we don't go through all the steps again.


