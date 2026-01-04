export async function main(ns) {
    while (true) {
        const server = ns.args[0];
        await ns.share(server); // Shares money with other players on the specified server
}

}