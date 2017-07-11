const { Readable } = require('stream')

const inStream = new Readable();

// This approach loads the whole data to memory. WRONG
inStream.push('a09sdu9A)UDs90ad-aD');
inStream.push(null); // No more data;

inStream.pipe(process.stdout);