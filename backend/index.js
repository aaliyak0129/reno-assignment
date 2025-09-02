const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const pool = require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Ensure upload folder exists
const UPLOAD_DIR = path.join(__dirname, "schoolImages");
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR);

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname.replace(/\s+/g, "_"));
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png/;
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowed.test(ext)) cb(null, true);
    else cb(new Error("❌ Only .jpg, .jpeg, .png files are allowed!"));
  },
});

// Serve images
app.use("/schoolImages", express.static(UPLOAD_DIR));

/**
 * ➕ Add School
 */
app.post("/api/schools", (req, res) => {
  upload.single("image")(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err.message });
    }

    try {
      const { name, address, city, state, contact, email } = req.body;
      const imageFile = req.file ? req.file.filename : null;

      if (!name || !email || !contact) {
        return res
          .status(400)
          .json({ message: "❌ Name, email & contact are required" });
      }

      const [result] = await pool.query(
        `INSERT INTO schools (name, address, city, state, contact, image, email)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [name, address, city, state, contact, imageFile, email]
      );

      res.json({
        success: true,
        id: result.insertId,
        message: "✅ School added successfully!",
        imageUrl: imageFile
          ? `${req.protocol}://${req.get("host")}/schoolImages/${imageFile}`
          : null,
      });
    } catch (error) {
      console.error("POST /api/schools error:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  });
});

/**
 * 📋 Get All Schools
 */
app.get("/api/schools", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM schools ORDER BY id DESC");

    // Add full image URLs for frontend
    const schoolsWithUrls = rows.map((school) => ({
      ...school,
      imageUrl: school.image
        ? `${req.protocol}://${req.get("host")}/schoolImages/${school.image}`
        : null,
    }));

    res.json(schoolsWithUrls);
  } catch (err) {
    console.error("GET /api/schools error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Start server
app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);
