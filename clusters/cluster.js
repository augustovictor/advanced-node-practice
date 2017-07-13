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
    // console.dir(cluster.workers, { depth: 0 });

    updateWorkers(numberOfUsersInDB());
    setInterval(() => {
        updateWorkers(numberOfUsersInDB());
    }, 10000);
    
} else { // cluster.isWorker
    require('./server');
}