/** @param {NS} ns */
export async function main(ns) {
    const target = ns.args[0];
    const delay = 200;

    const weakenTime = ns.getWeakenTime(target);
    const growTime = ns.getGrowTime(target);
    const hackTime = ns.getHackTime(target);

    const weakenThreads = 1;
    const growThreads = 1;
    const hackThreads = 1;

    ns.exec("weaken.js", "home", weakenThreads, target);
    await ns.sleep(delay);
    ns.exec("grow.js", "home", growThreads, target);
    await ns.sleep(delay);
    ns.exec("weaken.js", "home", weakenThreads, target);
    await ns.sleep(delay);
    ns.exec("hack.js", "home", hackThreads, target);
}
