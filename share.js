export async function main(ns) {
    while (true) {
        ns.print("Time: " + new Date().toLocaleTimeString());
        await ns.share();

        let sharePower = ns.getSharePower();

        ns.print("Share Power is " + sharePower);
        ns.print("--------------------------------");
    }
}
