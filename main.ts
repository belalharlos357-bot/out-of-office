// out-of-office entry: print the one-line entry from entry.txt
// The entry is a single line; trailing whitespace is trimmed before printing.
import { readFile } from "node:fs/promises";

const line = (await readFile(new URL("./entry.txt", import.meta.url), "utf8")).trim();
console.log(line);
