const cluster = require('cluster');
const os = require('os');

// Mock of number of users created in database. And double its value every time it's called
const numberOfUsersInDB = () => {
    this.count = this.count || 5;
    this.count *= this.count;
    return this.count;
}

const updateWorkers = (payload) => {
    Object.values(cluster.workers).forEach(worker => {
        worker.send({ payload });
    });
}

if(cluster.isMaster) {
    const cpus = os.cpus().length;
    console.log(`Forking for ${cpus} CPUs.`);

    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }
    console.log(`Master PID: ${process.pid}`)
    // console.dir(cluster.workers, { depth: 0 });

    updateWorkers(numberOfUsersInDB());
    
    setInterval(() => {
        updateWorkers(numberOfUsersInDB());
    }, 10000);

    cluster.on('exit', (worker, code, signal) => {
        if(code !== 0 && !worker.exitedAfterDisconnect) { // worker.exitedAfterDisconnect is set to true when the master processes calls a kill or disconnect in a child process
            console.log(`Worker ${worker.id} crashed. Starting a new worker...`);
            cluster.fork();
        }
    });

    // To get the master process to restart its workers, by the user, when a new version of the application has to be deployed.
    process.on('SIGUSR2', () => {
        const workers = Object.values(cluster.workers);
        const restartWorker = workerIndex => {
            const worker = workers[workerIndex];
            if(!worker) return;

            worker.on('exit', () => {
                if(!worker.exitedAfterDisconnect) return;

                console.log(`Exited process ${worker.process.pid}`);
                cluster.fork().on('listening', () => {
                    restartWorker(workerIndex + 1);
                });

                // To test this: Start the cluster > Get the PID > Open two terminals > In terminal 1 run the ab -r -c200 -t10 localhost:3000. In the other kill -SIGUSR2 <PID>
            });
            

            worker.disconnect();
        };

        restartWorker(0);
    });
    
} else { // cluster.isWorker
    require('./server');
}