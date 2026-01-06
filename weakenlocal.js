/**
 * Bitburner weaken local script
 * Usage: run weakenlocal.js [target]
 */

/** @param {NS} ns */
export async function main(ns) {
    const target = ns.args[0] || ns.getHostname();
    // @ignore-infinite-loop
    while (true) {
        await ns.weaken(target);
    }
}
