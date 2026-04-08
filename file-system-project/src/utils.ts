import * as fs from "fs/promises";
import * as path from "path";

export async function printDirectoryStructure(dir: string, indent = ""): Promise<void> {
  try {
    const files = await fs.readdir(dir);

    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = await fs.stat(fullPath);

      console.log(indent + "- " + file);

      if (stat.isDirectory()) {
        await printDirectoryStructure(fullPath, indent + "  ");
      }
    }
  } catch (error) {
    console.error("Error printing directory:", error);
  }
}