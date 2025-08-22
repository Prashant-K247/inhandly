import express from "express";
import cors from "cors";
import PDFDocument from "pdfkit";

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("backend is working");
});

app.post('/generate-pdf', (req, res) => {
    console.log("🔍 Raw request body:", req.body);
    const { ctc,breakdown , inhand,netmonthly  } = req.body;
    
    const doc = new PDFDocument();
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'inline; filename="ctc-report.pdf"');
    doc.pipe(res);
    doc.fontSize(18).text("CTC Report", { align: "center" });
    doc.moveDown();
    doc.text(`CTC: ${ctc}`);
    doc.text(`Breakdown: ${breakdown}`);
    doc.text(`In-Hand Salary (pre Income tax): ${inhand}`);
    doc.text(`Net monthly salary(pre Income tax): ${netmonthly}`);
    doc.end();
});

app.listen(5000, () => {
    console.log("server is running on port 5000");
});
