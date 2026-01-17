export async function main(ns) {
    const servers =  ns.args.slice(0);
    ns.brutessh(servers);
    ns.ftpcrack(servers);
    ns.relaysmtp(servers);
    ns.httpworm(servers);
    ns.sqlinject(servers);
    await ns.sleep(200);
    ns.tprint(`Attempting to backdoor ${servers}...`);
    const success = ns.backdoor(servers);

}