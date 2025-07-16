/** @param {NS} ns */
export async function main(ns) {
    const servers = ["n00dles", "foodnstuff", "joesguns", "sigma-cosmetics"]; // add more servers as needed
    const script = "batch-hack.js";
    const threads = 1;

    for (const server of servers) {
        if (ns.hasRootAccess(server)) {
            if (ns.getServerMaxRam(server) >= ns.getScriptRam(script)) {
                ns.scp(["batch-hack.js", "weaken.js", "grow.js", "hack.js"], server, "home");
                ns.exec(script, server, threads, server);
                ns.tprint(`Started batch hacking on ${server}`);
            }
        }
    }
}
