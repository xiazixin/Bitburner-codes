export async function main(ns) {
    while (true) {
        if (ns.getServerSecurityLevel("n00dles") > ns.getServerMinSecurityLevel("n00dles") + 5) {
            await ns.weaken("n00dles");
        } else if (ns.getServerMoneyAvailable("n00dles") < ns.getServerMaxMoney("n00dles") * 0.75) {
            await ns.grow("n00dles");
        } else {
            await ns.hack("n00dles");
        }
    }
}
