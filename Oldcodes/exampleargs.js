// example.js
export async function main(ns) {
  ns.tprint(ns.args.length) // 3
  ns.tprint(ns.args[0]); // 7 (number)
  ns.tprint(ns.args[1]); // "text" (string)
  ns.tprint(ns.args[2]); // true (boolean)
  ns.tprint(ns.args[3]); // undefined, because only 3 arguments were provided
}