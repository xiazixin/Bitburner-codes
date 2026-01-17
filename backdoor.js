export async function main(ns) {

    const servers = ns.args.slice(0);

    for (const server of servers) {
    ns.brutessh(server);
    ns.ftpcrack(server);
    ns.relaysmtp(server);
    ns.httpworm(server);
    ns.sqlinject(server);
    ns.nuke(server);
    await ns.sleep(200);
    
    ns.tprint(`Attempting to backdoor ${server}...`);
    const success = ns.backdoor(server);
    }

}