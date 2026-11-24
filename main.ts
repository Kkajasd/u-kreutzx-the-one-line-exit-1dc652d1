// The One-Line Exit — u-kreutzx-the-one-line-exit-1dc652d1
// Writes exactly one funny resignation letter line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I resign as night-shift security guard: the ghosts in this building have better benefits than I do, and they never even clock in.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
