export async function main(ns) {
    const args = ns.args;
    ns.tprint(`Number of arguments: ${args.length}`);
    ns.tprint(`First argument: ${args[0]}`);
    ns.tprint(getServer(args[0]));
}