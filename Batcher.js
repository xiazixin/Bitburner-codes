export async function main(ns) {
    const server = ns.args[0];
    const batchercount = ns.args[1];
    const batchers = [];
    const singer = ns.run("singler.js", 1, server);

    for (let i = 0; i < batchercount; i++) {
        const batcher = ns.run("Batcher.js", 1, server);
        batchers.push(batcher);
        ns.tprint(`Started Batcher ${i + 1} with PID ${batcher}`);
        while (true) {
            //weaken grow hack cycle
            singer
            
        }

    }
}