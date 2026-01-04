export async function main(ns) {
  const scanresults = ns.scan(ns.args[0]);
  ns.tprint("Scanned servers.");
  ns.tprint(scanresults);
  }
  
