import fs from "node:fs/promises";

// File reader.
export default async function fileReader(filePath) {
  const content = await fs.readFile(filePath);
  console.log(
    "Here is your file's content:\n\n",
    content.toLocaleString(),
    "\n\n"
  );
}
