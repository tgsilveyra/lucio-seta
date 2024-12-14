import { promises as fs } from "fs";

export async function getData() {
  const file = await fs.readFile(
    process.cwd() + "/src/app/data/lucio-seta-data.json",
    "utf8"
  );

  return new Response(file);
}
