// Strategies
// - Cloning [ Used in this tutorial ]: The application and each one handles part of the workload; Use this strategy when it is easier to add more resources to ONE machine
// - Decomposing: Microservices
// - Splitting: Horizontal partitioning or sharding. It is based, for instance, in user location.

// 4 ways to create a Child processes in Node
// 1. spawn() - Lauches a command in a new process;
// 2. fork() - 
// 3. exec() - Creates a shell. Buffers the generated command output and pass the whole value to a callback;
// 4. execFile() - To execute a file.

// Drawbacks of load balance:
// We cannot cache data in memory because each worker has its own memory space. To store something in cache we must use other application. E.g., redis.
// Stateful comunication becomes a problem. Each worker has its own state. So if a user logged in a worker, other would not know about it. The best to do here is also use redis.
//  In case redis cannot be used, you can use the approach Sticky Load Balancing. When a user authenticates with a worker instance, we keep a record of that relation on the Load Balancer level.
//  So the next time the user makes a request again, we look up the records and send the user to the same worker.
//  The cluster module does not support sticky load balancing.