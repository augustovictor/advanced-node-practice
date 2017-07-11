// Info about cpus, netowk interfaces, memory and what OS node was compiled for.

const os = require('os');
const util = require('util');
const assert = require('assert');
const debuglog = util.debuglog('web');

const name = 'Victor';
console.log(util.format('The given name is %s.', name));

const jsonObj = {
    name: 'victor',
    age: 25,
    skills: ['nodejs', 'redis', 'microservices architecture'],
    goals: {
        professional: {
            node: ['event loop', 'async'],
            microservices: ['greenfield', 'brownfield']
        },
        personal: ['pe1', 'pe2']
    }
};

console.log(util.inspect(jsonObj, { depth: 1 }));

console.log(console);
console.log(assert);
console.trace("here");
debuglog('We are in debug mode.');