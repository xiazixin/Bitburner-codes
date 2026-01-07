export async function main(ns) {
    const server = ns.args[0];
    const batchercount = ns.args[1];
    const maxsecurityallowed = ns.getServerMinSecurityLevel(server) + 5;
    const minmoneyallowed = ns.getServerMaxMoney(server) * 0.75;


    if (!server || !batchercount) {
        ns.tprint("Usage: run singlerscripted.js [server] [batchercount]");
        return;
    }

    const batchers = [];
    for (let i = 0; i < batchercount; i++) {
        const pid = ns.run("singlerscripted.js", 1, server, maxsecurityallowed, minmoneyallowed);
        if (pid !== 0) {
            batchers.push(pid);
            ns.tprint(`Started singlerscripted.js instance ${i + 1} with PID ${pid}`);
        } else {
            ns.tprint(`Failed to start singlerscripted.js instance ${i + 1}`);
        }
        await ns.sleep(100); // Small delay to avoid race conditions
    }
}
    