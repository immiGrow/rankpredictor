export const runtime = "nodejs";

import clientPromise from "@/lib/mongodb";
import nodemailer from "nodemailer";
import { PDFName, PDFNumber, PDFString,PDFDocument, rgb  } from "pdf-lib";
import fs from "fs";
import path from "path";
import { Buffer } from "buffer";
import { NextResponse } from "next/server";
import * as fontkit from "fontkit";

const DB_NAME = "rank_predictor";
const COLLECTION_NAME = "leads";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function wrapText(text, font, fontSize, maxWidth) {
  const words = String(text ?? "").split(" ");
  const lines = [];
  let line = "";

  for (const word of words) {
    const testLine = line ? `${line} ${word}` : word;
    const width = font.widthOfTextAtSize(testLine, fontSize);

    if (width <= maxWidth) {
      line = testLine;
    } else {
      if (line) lines.push(line);
      line = word;
    }
  }

  if (line) lines.push(line);
  return lines;
}


// ===================== PDF GENERATION =====================
async function generatePDF({ email, rank, colleges, category, gender, quota, rankType }) {
  // Required imports for coordinate and annotation handling
  const { PDFDocument, rgb, PDFName } = require('pdf-lib'); 
  const pdfDoc = await PDFDocument.create();
  pdfDoc.registerFontkit(fontkit);

  // Load Poppins Font
  const fontBytes = fs.readFileSync(path.join(process.cwd(), "public/fonts/Poppins.ttf"));
  const font = await pdfDoc.embedFont(fontBytes);

  const FONT_SIZE = 9;
  const HEADER_SIZE = 10;
  const MARGIN = 40;
  const ROW_PADDING = 10; // Extra padding ensures text doesn't touch row borders

  const rows = [
    ...(colleges.high || []),
    ...(colleges.medium || []),
    ...(colleges.low || []),
  ];

  const columns = [
    { label: "#", width: 30 },
    { label: "Institute", width: 150 },
    { label: "Program", width: 160 },
    { label: "Cat", width: 40 },
    { label: "R", width: 30 },
    { label: "CR", width: 45 },
    { label: "Chance", width: 45 },
  ];

  let page = pdfDoc.addPage();
  let { height } = page.getSize();
  let y = height - MARGIN;

  const drawWatermark = () => {
    page.drawText(`Generated for ${email} | Rank ${rank}`, {
      x: MARGIN,
      y: 20,
      size: 8,
      font,
      color: rgb(0.6, 0.6, 0.6),
    });
  };

  const drawTableHeader = () => {
    let x = MARGIN;
    page.setFont(font);
    page.setFontSize(HEADER_SIZE);
    columns.forEach(col => {
      page.drawText(col.label, { x, y });
      x += col.width;
    });
    y -= HEADER_SIZE + 8;
  };

  const addNewPage = () => {
    page = pdfDoc.addPage();
    height = page.getSize().height;
    y = height - MARGIN;
    drawTableHeader();
    drawWatermark();
  };

  // --- Header Information ---
  page.drawText("JEE College Prediction Report", { x: MARGIN, y, size: 18, font });
  y -= 22;
  page.drawText("jeerankpredictor.in", { x: MARGIN, y, size: 10, font, color: rgb(0.4, 0.4, 0.4) });
  y -= 18;
  page.drawText(`Email: ${email}`, { x: MARGIN, y, size: 10, font });
  y -= 14;
  page.drawText(`Rank: ${rank} | Category: ${category} | Quota: ${quota}`, { x: MARGIN, y, size: 10, font });
  y -= 25;

  drawTableHeader();
  drawWatermark();

  // --- DYNAMIC ROW DRAWING (Fixes Collapsed/Jumbled Layout) ---
  rows.forEach((row, i) => {
    const values = [
      String(i + 1), 
      row.institute || "N/A", 
      row.program || "N/A", 
      row.category || category, 
      String(row.round || "1"), 
      String(row.crank || "N/A"), 
      `${row.score || 0}%`
    ];

    // 1. Calculate how many lines each cell needs based on its column width
    let maxLinesInThisRow = 1;
    const cellLines = values.map((text, idx) => {
      const lines = wrapText(text, font, FONT_SIZE, columns[idx].width - 4);
      if (lines.length > maxLinesInThisRow) maxLinesInThisRow = lines.length;
      return lines;
    });

    // 2. Calculate total height for this specific row
    const currentRowHeight = (maxLinesInThisRow * (FONT_SIZE + 2)) + ROW_PADDING;

    // 3. Prevent row overlapping via page break check
    if (y - currentRowHeight < MARGIN + 20) {
      addNewPage();
    }

    // 4. Draw each cell line by line
    let x = MARGIN;
    cellLines.forEach((lines, idx) => {
      let textY = y - FONT_SIZE; 
      lines.forEach(line => {
        page.drawText(line, { x, y: textY, size: FONT_SIZE, font });
        textY -= (FONT_SIZE + 2); 
      });
      x += columns[idx].width;
    });

    // 5. Update global Y by the actual height used by the tallest cell
    y -= currentRowHeight;
  });

  // --- Blurred Teaser Section ---
  const drawBlurredRow = (yPos) => {
    page.drawRectangle({
      x: MARGIN, y: yPos - 10, width: 510, height: 20,
      color: rgb(0.96, 0.96, 0.96),
    });
    page.drawText("RESTRICTED DATA: UPGRADE TO PRO TO UNLOCK 80+ COLLEGES", {
      x: MARGIN + 80, y: yPos - 5, size: 10, font, color: rgb(0.5, 0.5, 0.5),
    });
  };
  
  if (y < 100) addNewPage();
  drawBlurredRow(y);
  y -= 25;
  drawBlurredRow(y);

  // --- FINAL LOCK PAGE ---
  const lockPage = pdfDoc.addPage();
  const lh = lockPage.getSize().height;

  lockPage.drawText("🔒 Unlock Your Full College Report", {
    x: MARGIN, y: lh - 80, size: 24, font, color: rgb(0.1, 0.1, 0.1),
  });

  const bullets = [
    "✔ View all 80+ eligible NITs, IIITs and GFTIs",
    "✔ Round-wise cutoff trends (Round 1 to 6)",
    "✔ Home State (HS) vs Other State (OS) analysis",
    "✔ Detailed Branch-wise Admission Probability",
    "✔ Bonus: 10-Minute Strategy Call with a Senior IITian/NITian (Exclusive!)",
  ];

  let ly = lh - 130;
  bullets.forEach(b => {
    lockPage.drawText(b, { x: MARGIN, y: ly, size: 12, font });
    ly -= 22;
  });

  // URL construction with all necessary fields for pre-filling the unlock page
  const fullUnlockUrl = `https://jeerankpredictor.in/unlock?user=${encodeURIComponent(email)}&rank=${encodeURIComponent(rank)}&category=${encodeURIComponent(category)}&gender=${encodeURIComponent(gender)}&quota=${encodeURIComponent(quota)}&rankType=${encodeURIComponent(rankType)}`;

  const btnWidth = 350;
  const btnHeight = 40;
  const btnX = MARGIN;
  const btnY = ly - 50;

  lockPage.drawRectangle({
    x: btnX, y: btnY, width: btnWidth, height: btnHeight,
    color: rgb(0, 0.4, 0.8),
  });

  lockPage.drawText("CLICK HERE TO UNLOCK NOW 🔓", {
    x: btnX + 45, y: btnY + 14, size: 14, font, color: rgb(1, 1, 1),
  });

  // --- ANNOTATION SAFETY: Clickable Link Creation ---
  const linkAnnotation = pdfDoc.context.obj({
    Type: 'Annot',
    Subtype: 'Link',
    Rect: [btnX, btnY, btnX + btnWidth, btnY + btnHeight],
    Border: [0, 0, 0],
    A: { Type: 'Action', S: 'URI', URI: pdfDoc.context.obj(fullUnlockUrl) },
  });

  const annotsKey = PDFName.of('Annots');
  let annots = lockPage.node.get(annotsKey);
  if (!annots) {
    annots = pdfDoc.context.obj([]);
    lockPage.node.set(annotsKey, annots);
  }
  annots.push(linkAnnotation);

  lockPage.drawText("Secure payment powered by Razorpay", {
    x: btnX, y: btnY - 20, size: 8, font, color: rgb(0.6, 0.6, 0.6),
  });

  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}
// ===================== API ROUTE =====================
export async function POST(req) {
  try {
    const { email, rank, colleges, category, gender, quota,rankType } = await req.json();
    console.log("Lead API called with:", { email, rank, colleges, category, gender, quota,rankType });
    // Validation
    if (!email || !rank || !colleges) {
      return NextResponse.json(
        { message: "Invalid request data" },
        { status: 400 }
      );
    }

    // Save lead to MongoDB (upsert)
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);

    await collection.updateOne(
      { email },
      { $setOnInsert: { email, createdAt: new Date() } },
      { upsert: true }
    );

    // Generate PDF
    const pdfBuffer = await generatePDF({ email, rank, colleges,category, gender, quota,rankType });

    // Send email to user
    await transporter.sendMail({
      from: `"JEE Rank Predictor" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Your JEE College Prediction Report (PDF)",
      text: "Attached is your personalized JEE college prediction report.",
      attachments: [
        {
          filename: `jee-college-prediction-${rankType}.pdf`,
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    });

    return NextResponse.json(
      { message: "PDF sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
