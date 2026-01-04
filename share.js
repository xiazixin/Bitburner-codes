export async function main(ns) {
    while (true) {
        const server = ns.args[0];
        ns.share(server);
}

}