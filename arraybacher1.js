export async function main(ns) {
    const batchercount = ns.args[0];
    const servers = ns.args.slice(1);

    if (!batchercount || servers.length === 0) {
        ns.tprint("Usage: run arraybatcher.js [batchercount] [server1] [server2] ...");
        return;
    }

    for (let i = 0; i < batchercount; i++) {
        for (const server of servers) {
            const maxsecurityallowed = ns.getServerMinSecurityLevel(server) + 5;
            const minmoneyallowed = ns.getServerMaxMoney(server) * 0.75;
            const pid = ns.run("singlerscripted.js", 1, server, maxsecurityallowed, minmoneyallowed);
            if (pid !== 0) {
                ns.tprint(`Started singlerscripted.js for ${server} instance ${i + 1} with PID ${pid}`);
            } else {
                ns.tprint(`Failed to start singlerscripted.js for ${server} instance ${i + 1}`);
            }
            await ns.sleep(100); // Small delay to avoid race conditions
        }
    }
}
// arraybatcher1.js 2500 iron-gym harakiri-sushi hong-fang-tea joesguns max-hardware nectar-net sigma-cosmetics computek omega-net lexo-corp zb-institute catalyst crush-fitness syscore the-hub phantasy neo-net taiyang-digital univ-energy defcomm unitalife global-pharm aevum-police nova-med infocomm solaris deltaone zeus-med zb-def icarus omnia snap-fitness rho-construction rothman-uni johnson-ortho galactic-cyber millenium-fitness aerocorp alpha-ent summit-uni netlink n00dles foodnstuff zer0 silver-helix