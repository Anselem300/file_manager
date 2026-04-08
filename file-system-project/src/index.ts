import { FileManager } from "./FileManager";
import { Uploader } from "./Uploader";
import { Downloader } from "./Downloader";
import { printDirectoryStructure } from "./utils";

async function main() {
  console.log("=== FILE SYSTEM PROJECT START ===");

  const storagePath = "./storage";
  const downloadPath = "./downloads";

  const fileManager = new FileManager(storagePath);
  const uploader = new Uploader();
  const downloader = new Downloader();

  try {
    // UPLOAD
    console.log("\nUploading file...");
    await uploader.upload("./test.txt", storagePath);

    // LIST FILES (ARRAY)
    console.log("\nListing stored files...");
    const files = await fileManager.listFiles();
    console.log("Files:", files);

    // RECURSION SEARCH
    console.log("\nSearching for file using recursion...");
    const foundPath = await fileManager.findFileRecursive(storagePath, "test.txt");
    console.log("Found at:", foundPath);

    // DOWNLOAD
    console.log("\nDownloading file...");
    await downloader.download("test.txt", storagePath, downloadPath);

    // EXTRA: PRINT DIRECTORY STRUCTURE (Recursion)
    console.log("\nDirectory Structure:");
    await printDirectoryStructure(storagePath);

  } catch (error) {
    console.error("Unexpected error:", error);
  }

  console.log("\n=== PROJECT COMPLETE ===");
}

main();