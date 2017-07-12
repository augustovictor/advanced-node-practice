// Strategies
// - Cloning [ Used in this tutorial ]: The application and each one handles part of the workload; Use this strategy when it is easier to add more resources to ONE machine
// - Decomposing: Microservices
// - Splitting: Horizontal partitioning or sharding. It is based, for instance, in user location.

// 4 ways to create a Child processes in Node
// 1. spawn() - Lauches a command in a new process;
// 2. fork() - 
// 3. exec() - Creates a shell. Buffers the generated command output and pass the whole value to a callback;
// 4. execFile() - To execute a file.