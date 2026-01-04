export async function main(ns) {
    // @ignore-infinite-loop
    while (true) {
        if (ns.getServerSecurityLevel(ns.args[0]) > ns.getServerMinSecurityLevel(ns.args[0]) + 5) {
            await ns.weaken(ns.args[0]);
        } else if (ns.getServerMoneyAvailable(ns.args[0]) < ns.getServerMaxMoney(ns.args[0]) * 0.75) {
            await ns.grow(ns.args[0]);
        } else {
            await ns.hack(ns.args[0]);
        }
    }
}
