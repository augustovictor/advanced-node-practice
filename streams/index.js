// 4 types of streams. All are instances of EventEmitters:
// 1. Readable - Abstraction for source from which data can be consumed. E.g., fs.createReadStream
// 2. Writable - Abstraction for destination to where data can be writen. E.g., fs.createWriteStream
// 3. Duplex - Readable and Writable. E.g., net.Socket
// 4. Transform - Like a Duples but can modify the data while it's read or writen. E.g., zlib.createGzip

// We use src.pipe(dst) to consume streams; Here we pipe the output of a readable stream (src) as the input of a writable stream (dst);
// To pipe readables and writables in chain we must use Duplex streams.
// Use either pipes or events. Not both. To consume data in a special way, use events.

// Two steps to use streams:
// 1. Implementing - Use require('stream');
// 2. Consuming - Use piping/events;

// Most important methods of readable and writable streams
// Readable
// EVENTS
// - data: When the stream passes a chunk of data to the consumer;
// - end: No more data to be consumed;
// FUNCTIONS
// - pipe(), unpipe(): To consume a readable stream;
// - read(), unshift(), resume(): To consume a readable stream;

// Writable
// EVENTS
// - drain: When the writable stream cannot receive more data;
// - finish: When the data has been flushed to the underlying system;
// FUNCTIONS
// - write(): To consume a writable stream;
// - end(): When we are done;

// Streams states
// Paused - All readable streams start in pause mode;
// Here we have to use stream.read() to read from the stream;

// Flowing
// We have to listen to events to consume the data;
// Data can be lost if there are no consumers to handle the data. This is why when we have a stream in flowing mode, we need a data event handler.
// If we add an event handler the stream is switched to flowing mode. And removing it switches back to paused mode.
// To switch between the two modes we use:
// From Paused to Flwoing: stream.resume();
// From Flowing to Paused: stream.pause();