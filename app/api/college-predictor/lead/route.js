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
async function generatePDF({ email, rank, colleges }) {
  const pdfDoc = await PDFDocument.create();
  pdfDoc.registerFontkit(fontkit);

  const fontBytes = fs.readFileSync(
    path.join(process.cwd(), "public/fonts/Poppins.ttf")
  );
  const font = await pdfDoc.embedFont(fontBytes);

  const FONT_SIZE = 9;
  const HEADER_SIZE = 10;
  const MARGIN = 40;
  const ROW_PADDING = 6;

  // Flatten colleges
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
    ({ height } = page.getSize());
    y = height - MARGIN;
    drawTableHeader();
    drawWatermark();
  };

  const drawRow = (row, index) => {
    const values = [
      String(index + 1),
      row.institute,
      row.program,
      row.category,
      String(row.round),
      String(row.crank),
      `${row.score}%`,
    ];

    let rowHeight = FONT_SIZE + ROW_PADDING;

    // Calculate max row height
    values.forEach((text, i) => {
      const lines = wrapText(text, font, FONT_SIZE, columns[i].width - 4);
      rowHeight = Math.max(
        rowHeight,
        lines.length * (FONT_SIZE + 2) + ROW_PADDING
      );
    });

    if (y - rowHeight < MARGIN + 40) {
      addNewPage();
    }

    let x = MARGIN;
    page.setFontSize(FONT_SIZE);

    values.forEach((text, i) => {
      const lines = wrapText(text, font, FONT_SIZE, columns[i].width - 4);
      let textY = y - FONT_SIZE;

      lines.forEach(line => {
        page.drawText(line, { x, y: textY });
        textY -= FONT_SIZE + 2;
      });

      x += columns[i].width;
    });

    y -= rowHeight;
  };

  // ===== TITLE =====
  page.drawText("JEE College Prediction Report", {
    x: MARGIN,
    y,
    size: 18,
    font,
  });
  y -= 22;

  page.drawText("jeerankpredictor.in", {
    x: MARGIN,
    y,
    size: 10,
    font,
    color: rgb(0.4, 0.4, 0.4),
  });
  y -= 18;

  page.drawText(`Email: ${email}`, { x: MARGIN, y, size: 10, font });
  y -= 14;
  page.drawText(`Rank: ${rank}`, { x: MARGIN, y, size: 10, font });
  y -= 25;

  drawTableHeader();
  drawWatermark();

  rows.forEach((row, i) => drawRow(row, i));

  // ===== LOCK PAGE =====
  const lockPage = pdfDoc.addPage();
  const lh = lockPage.getSize().height;

  lockPage.setFont(font);

  lockPage.drawText("🔒 Unlock Full College Report", {
    x: MARGIN,
    y: lh - 80,
    size: 22,
  });

  const bullets = [
    "✔ All 100+ eligible colleges",
    "✔ Branch-wise & category cutoffs",
    "✔ Gender & category analysis",
    "✔ JoSAA round-wise strategy",
    "✔ 1-to-1 Phone call with NITians (One time offer)",
  ];

  let ly = lh - 130;
  bullets.forEach(b => {
    lockPage.drawText(b, { x: MARGIN, y: ly, size: 12 });
    ly -= 18;
  });

  const unlockUrl = `https://jeerankpredictor.in/unlock?user=${encodeURIComponent(
    email
  )}&rank=${encodeURIComponent(rank)}`;

  lockPage.drawText("UNLOCK FULL REPORT 🔓", {
    x: MARGIN,
    y: ly - 30,
    size: 14,
    font,
    color: rgb(0, 0.4, 0.8),
    link: unlockUrl,
  });

  lockPage.drawText(unlockUrl, {
    x: MARGIN,
    y: ly - 55,
    size: 9,
    color: rgb(0.4, 0.4, 0.4),
    link: unlockUrl,
  });

  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}

// ===================== API ROUTE =====================
export async function POST(req) {
  try {
    const { email, rank, colleges } = await req.json();
    console.log("Lead API called with:", { email, rank, colleges });
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
    const pdfBuffer = await generatePDF({ email, rank, colleges });

    // Send email to user
    await transporter.sendMail({
      from: `"JEE Rank Predictor" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Your JEE College Prediction Report (PDF)",
      text: "Attached is your personalized JEE college prediction report.",
      attachments: [
        {
          filename: "jee-college-prediction.pdf",
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
