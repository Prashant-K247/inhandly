import express from "express";
import cors from "cors";
import PDFDocument from "pdfkit";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve frontend
const frontendPath = path.join(__dirname, "../ctc-calc/dist");
app.use(express.static(frontendPath));

// ✅ Backend test route
app.get("/api/health", (req, res) => {
  res.json({ message: "Backend is working 🚀" });
});

// ✅ PDF route
app.post("/api/generate-pdf", (req, res) => {
  console.log("🔍 Raw request body:", req.body);
  const { ctc, breakdown, inhand, netmonthly } = req.body;

  const doc = new PDFDocument();
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", 'inline; filename="ctc-report.pdf"');
  doc.pipe(res);

  doc.fontSize(18).text("CTC Report", { align: "center" });
  doc.moveDown();
  doc.text(`CTC: ${ctc}`);
  doc.text(`Breakdown: ${JSON.stringify(breakdown)}`);
  doc.text(`In-Hand Salary (pre Income tax): ${inhand}`);
  doc.text(`Net monthly salary (pre Income tax): ${netmonthly}`);
  doc.end();
});

// ✅ Catch-all route for React SPA
app.get("/*splat", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// ✅ Use Render port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
