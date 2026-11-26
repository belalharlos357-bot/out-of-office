// out-of-office — next-round entry (round 5).
// The one-line auto-reply lives in entry.txt; this script prints it.
// Hard reversal: the promised help is deletion, unread.
import { readFile } from "node:fs/promises";

const entryUrl = new URL("./entry.txt", import.meta.url);
const raw = await readFile(entryUrl, "utf8");
const entry = raw.trim();
process.stdout.write(entry + "\n");
