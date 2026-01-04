export async function main(ns) {
    const args = ns.args;
    print = ns.tprint;

    function getServer(serverName) {
        const server = ns.getServer(serverName);
        return `Server Name: ${server.name}, RAM: ${server.maxRam}GB, Hackable: ${server.hasAdminRights}`;
    }
    ns.tprint(`Number of arguments: ${args.length}`);
    ns.tprint(`First argument: ${args[0]}`);
    ns.tprint(getServer(args[0]));
}