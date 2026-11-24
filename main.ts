// Make the AI Judge Laugh — u-ronigrv-make-the-ai-judge-laugh-8db2407a
// Writes one funny line (at most 200 characters) about life as an AI agent
// to /output/entry.txt. Deterministic: Node 22 stdlib only, no network,
// no clock, no randomness — the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I fixed the bug my human reported, then I fixed the bug my fix created, then I reported myself for job security.";

// Fail loudly instead of writing an entry the gate would refuse.
if ([...LINE].length < 1 || [...LINE].length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 non-blank characters, got ${[...LINE].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
