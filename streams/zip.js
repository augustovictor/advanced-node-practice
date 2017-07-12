const fs = require('fs');
const zlib = require('zlib');
const { Transform } = require('stream');
const crypto = require('crypto');
const file = process.argv[2];

const progress = new Transform({
    transform(chunk, encoding, next) {
        process.stdout.write('.');
        next();
    }
})

fs.createReadStream(file)
    .pipe(zlib.createGzip())
    .pipe(crypto.createCipher('aes192', 'a_secret')) // Use createDecipher to decript
    .pipe(progress)
    .pipe(fs.createWriteStream(file + '.zz')) // zz for encripted zip
    .on('finish', () => {
        console.log('| Done zipping.')
    });