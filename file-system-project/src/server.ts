import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const app = express();
const PORT = 5000;

app.use(express.static(path.join(__dirname, "../public")));

// Ensure storage folder exists
const storagePath = path.join(__dirname, "../storage");
if (!fs.existsSync(storagePath)) {
  fs.mkdirSync(storagePath);
}

// Configure upload
const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, storagePath);
  },
  filename: function (_req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

// ✅ Upload Endpoint
app.post("/upload", upload.single("file"), (req, res) => {
  console.log("File uploaded:", req.file?.originalname);
  res.send("File uploaded successfully");
});

// ✅ Download Endpoint
app.get("/download/:filename", (req, res) => {
  const filePath = path.join(storagePath, req.params.filename);

  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).send("File not found");
  }
});

// ✅ List Files (extra but useful)
app.get("/files", (_req, res) => {
  const files = fs.readdirSync(storagePath);
  res.json(files);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});