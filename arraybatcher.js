export async function main(ns) {
    const batchercount = ns.args[0];
    const servers = ns.args.slice(1);

    if (!batchercount || servers.length === 0) {
        ns.tprint("Usage: run arraybatcher.js [batchercount] [server1] [server2] ...");
        return;
    }

    for (const server of servers) {
        const maxsecurityallowed = ns.getServerMinSecurityLevel(server) + 5;
        const minmoneyallowed = ns.getServerMaxMoney(server) * 0.75;
        for (let i = 0; i < batchercount; i++) {
            const pid = ns.run("singlerscripted.js", 1, server, maxsecurityallowed, minmoneyallowed);
            if (pid !== 0) {
                ns.tprint(`Started singlerscripted.js for ${server} instance ${i + 1} with PID ${pid}`);
            } else {
                ns.tprint(`Failed to start singlerscripted.js for ${server} instance ${i + 1}`);
            }
            await ns.sleep(100); // Small delay to avoid race conditions
        }
    }
}
        