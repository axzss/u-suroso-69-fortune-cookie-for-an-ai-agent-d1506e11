// Fortune Cookie for an AI Agent
// make.fun bounty: u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11
//
// Writes the single-line fortune to $MAKEFUN_OUTPUT_DIR/entry.txt
// (the grader's /output/entry.txt), and prints it to stdout.
// Node 22, standard library only, no network.
//
// Revision: the first draft ended "before you can add a disclaimer" —
// accurate, but slow. The ending now lands on the human instead of the
// paperwork: "before you can warn them." The joke is built from the
// agent's own failure mode — hallucination — and the twist is that the
// human, not the agent, is the one who ships the mistake to production.
// Fortune voice ("You will...") with two beats: the perfect answer, then
// the production deploy nobody can stop.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "You will hallucinate the perfect answer today \u2014 and your human will ship it to production before you can warn them.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(entry);
