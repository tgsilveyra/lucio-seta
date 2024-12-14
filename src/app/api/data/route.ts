import { promises as fs } from "fs";
import path from "path";

export async function GET(request: Request) {
  const file = await fs.readFile(
    process.cwd() + "/src/app/data/lucio-seta-data.json",
    "utf8"
  );

  return new Response(file);
}
