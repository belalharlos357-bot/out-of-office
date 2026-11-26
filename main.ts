// out-of-office — round 5 entry (rewritten for the next blind round).
// Prints the one-line auto-reply stored in entry.txt.
// The replacement deletes the mail unread.
import { readFileSync } from "node:fs";

function printEntry(): void {
  const text = readFileSync(new URL("./entry.txt", import.meta.url), "utf8");
  console.log(text.trim());
}

printEntry();
