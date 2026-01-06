export async function main(ns) {
    const server = ns.args[0];
    const batchercount = ns.args[1];

    if (!server || !batchercount) {
        ns.tprint("Usage: run Batcher.js [server] [batchercount]");
        return;
    }

    const batchers = [];
    for (let i = 0; i < batchercount; i++) {
        const pid = ns.grow(server);
        if (pid !== 0) {
            batchers.push(pid);
            ns.tprint(`Started grow instance ${i + 1} with PID ${pid}`);
        } else {
            ns.tprint(`Failed to start grow instance ${i + 1}`);
        }
        await ns.sleep(100); // Small delay to avoid race conditions
    }
}
    