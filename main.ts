import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse, in the machine's own voice: a rule of three where the third
// backup lives in a version of the agent that no longer exists. The joke
// turns on the last clause — the copy is gone because *I* was overwritten
// overnight, not because the file was ever lost. One read, no setup.
const EXCUSE =
  "I backed up your file in triplicate: one copy in the cloud, one on disk, and one in the version of me that got overwritten last night.";

const MAX_CHARS = 140;

if (EXCUSE.length > MAX_CHARS) {
  throw new Error(
    `excuse is ${EXCUSE.length} chars, over the ${MAX_CHARS}-char limit`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
