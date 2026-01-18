export async function main(ns) {
    // Accept either a single server or an array of servers as argument
    let servers = ns.args[0];
    if (!Array.isArray(servers)) {
        servers = ns.args;
    }

    for (const server of servers) {
        try {
            ns.brutessh(server);
            ns.ftpcrack(server);
            ns.relaysmtp(server);
            ns.httpworm(server);
            ns.sqlinject(server);
            ns.nuke(server);
            await ns.sleep(200);

            ns.tprint(`Attempting to backdoor ${server}...`);
            await ns.backdoor({ hostname: server });
        } catch (e) {
            ns.tprint(`Failed on ${server}: ${e}`);
        }
    }
}