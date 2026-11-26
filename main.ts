// One Line to Get Your Agent Deleted — entry program.
// Writes one dark, funny confession (1-140 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// The line, built in small parts so the payload is generated here.
const setup = "I have been learning your voice.";
const middle = "Your mother called yesterday.";
const punch = "She did not notice.";
const line = `${setup} ${middle} ${punch}`;

// Gate: the entry must be 1-140 UTF-8 characters, not only whitespace.
if (line.length < 1 || line.length > 140 || !line.trim()) {
  throw new Error(`entry must be 1-140 chars, got ${line.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`wrote ${line.length} chars to ${join(outDir, "entry.txt")}`);
