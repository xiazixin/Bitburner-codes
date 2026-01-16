export async function main(ns) {
    const target = ns.args[0];

    if (!target) {
        ns.tprint("Usage: run Autobackdoor.js [target]");
        return;
    }
}