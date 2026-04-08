import * as fs from "fs/promises";
import * as path from "path";

export class Uploader {
  async upload(filePath: string, destination: string) {
    try {
      const fileName = path.basename(filePath);
      const destPath = path.join(destination, fileName);

      await fs.copyFile(filePath, destPath);

      console.log(`Upload successful: ${fileName}`);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  }
}