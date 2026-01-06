export async function main(ns) {
    // @ignore-infinite-loop
    while (true) {
        await ns.grow(server);
    }
}