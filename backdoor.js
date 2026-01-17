export async function main(ns) {
    const servers =  ns.args.slice(0);
    brutessh(target);
    ftpcrack(target);
    relaysmtp(target);
    httpworm(target);
    sqlinject(target);
    await ns.sleep(200);
    ns.tprint(`Attempting to backdoor ${target}...`);
    const success = ns.backdoor(target);

}