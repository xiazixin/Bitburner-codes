export async function main(ns) {
    // @ignore-infinite-loop
    while (true) {
        await ns.grow(ns.args[0]);
    }
}