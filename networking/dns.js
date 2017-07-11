const dns = require('dns'); // name -- address

// Uses libuv
// dns.lookup('pluralsight.com', (err, address) => {
//     console.log(address);
// });

// Uses network lib
// dns.resolve4('pluralsight.com', (err, address) => {
//     console.log(address); // Array of addresses. All the -A records.
// });

// Specify the Record. A or MX or ...
dns.resolve('pluralsight.com', 'A', (err, address) => {
    console.log(address);
});

// Translates IP back to hostnames
dns.reverse('50.112.175.212', (err, hostnames) => {
    console.log(hostnames);
})