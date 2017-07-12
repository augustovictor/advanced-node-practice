const { Duplex } = require('stream');

const duplexStream = new Duplex({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    },
    read(size) {
        if(this.currentCharCode > 90) {
            return this.push(null);
        }
        this.push(String.fromCharCode(this.currentCharCode++));
    }
});

duplexStream.currentCharCode = 65;
process.stdin.pipe(duplexStream).pipe(process.stdout);