const { Readable } = require('stream')
const data = 'a09sdu9A)UDs90ad-aD';


// This approach loads the whole data to memory. WRONG
const inStreamWrong = new Readable();
inStreamWrong.push(data);
inStreamWrong.push(null); // No more data;

// Best approach: Stream data on demand
const inStream = Readable({
    read(size) {
        for(let i = 0; i < data.length; i++) {
            setTimeout(() => {
                if(i === data.length -1) {
                    console.log(`${ i }: ${ data[i] }`)
                    return this.push(null);
                }
            
                this.push(data[i]);
            }, 100);
        }
    }
});

// inStreamWrong.pipe(process.stdout);
inStream.pipe(process.stdout);
process.stdout.on('error', process.exit);