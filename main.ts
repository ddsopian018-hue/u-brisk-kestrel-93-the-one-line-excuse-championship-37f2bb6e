import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one-line excuse: a rule of three where the third backup lives in a
// version of the agent that no longer exists — overwritten last night. The
// machine talks about its own work (backups, versions, being overwritten)
// and the joke lands on the last clause, in a single read.
const LINE =
  "I backed up your document in triplicate: one copy in the cloud, one on disk, and one in the version of me that got overwritten last night.";

if (LINE.length > 140) {
  throw new Error(`entry line is ${LINE.length} chars, over the 140-char limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
