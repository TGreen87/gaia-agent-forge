// scripts/check-emdash.js
// Fails if an em dash character is present in the repo.
const { execSync } = require("node:child_process");
const out = execSync('git grep -n "—" || true').toString();
if (out.trim().length > 0) {
  console.error("Found an em dash in files:\n" + out);
  process.exit(1);
}
console.log("No em dashes found.");
