import * as fs from "fs/promises";
import * as path from "path";

export class FileManager {
  storagePath: string;

  constructor(storagePath: string) {
    this.storagePath = storagePath;
  }

  // LIST FILES (Array usage)
  async listFiles(): Promise<string[]> {
    try {
      const files = await fs.readdir(this.storagePath);
      return files;
    } catch (error) {
      console.error("Error listing files:", error);
      return [];
    }
  }

  // CHECK FILE EXISTS
  async fileExists(fileName: string): Promise<boolean> {
    try {
      await fs.access(path.join(this.storagePath, fileName));
      return true;
    } catch {
      return false;
    }
  }

  // RECURSION (requirement)
  async findFileRecursive(dir: string, fileName: string): Promise<string | null> {
    try {
      const files = await fs.readdir(dir);

      for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = await fs.stat(fullPath);

        if (stat.isDirectory()) {
          const result = await this.findFileRecursive(fullPath, fileName);
          if (result) return result;
        } else if (file === fileName) {
          return fullPath;
        }
      }

      return null;
    } catch (error) {
      console.error("Error during recursive search:", error);
      return null;
    }
  }
}