// To use with chrome dev tools use: node --inspect --debug-brk debug.js

// Add a breakpoint to line x: node inspect debug.js. Then sb(x). Then use command restart
// Interact with values with repl

function negativeSum(...args) {
    return args.reduce((arg, total) => { // args and total order are inversed. Fix it =D.
        // To inspect arg and total: watch('arg'). Then watch('total'). Then c.
        return total-arg;
    }, 0);
}

console.log(negativeSum(1, 5, 10));