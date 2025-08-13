// scripts/check-emdash.js
// Fails if an em dash character is present in the repo (visible copy rule).
const { execSync } = require("node:child_process");
const out = execSync("git grep -n '\u2014' || true").toString();
if (out.trim().length > 0) {
  console.error("Found an em dash in files:\n" + out);
  process.exit(1);
}
console.log("No em dashes found.");
