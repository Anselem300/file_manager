import * as fs from "fs/promises";
import * as path from "path";

export class Downloader {
  async download(fileName: string, source: string, destination: string) {
    try {
      const sourcePath = path.join(source, fileName);
      const destPath = path.join(destination, fileName);

      await fs.copyFile(sourcePath, destPath);

      console.log(`Download successful: ${fileName}`);
    } catch (error) {
      console.error("Download failed:", error);
    }
  }
}