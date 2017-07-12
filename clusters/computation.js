const longComputation = () => {
    let sum = 0;
    for(let i = 0; i < 1e9; i++) {
        sum += i;
    }
    return sum;
}

// Correct
process.on('message', msg => {
    const sum = longComputation();
    process.send(sum); // Sent back to parent process.
})

module.exports = { longComputation } // Used to simulate the wrong way
