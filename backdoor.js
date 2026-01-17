export async function main(ns) {
    const servers =  ns.args.slice(0);
    ns.brutessh(target);
    ns.ftpcrack(target);
    ns.relaysmtp(target);
    ns.httpworm(target);
    ns.sqlinject(target);
    await ns.sleep(200);
    ns.tprint(`Attempting to backdoor ${target}...`);
    const success = ns.backdoor(target);

}