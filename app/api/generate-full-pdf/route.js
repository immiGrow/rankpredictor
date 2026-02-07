import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import clientPromise from "@/lib/mongodb";
import { INSTITUTE_TIER } from "@/lib/instituteTier";

// Helper for professional text wrapping
function wrapText(text, font, fontSize, maxWidth) {
    const words = text.split(' ');
    let lines = [];
    let currentLine = words[0];
    for (let i = 1; i < words.length; i++) {
        const width = font.widthOfTextAtSize(currentLine + ' ' + words[i], fontSize);
        if (width < maxWidth) { currentLine += ' ' + words[i]; }
        else { lines.push(currentLine); currentLine = words[i]; }
    }
    lines.push(currentLine);
    return lines;
}

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const rank = parseInt(searchParams.get("rank"));
    const category = searchParams.get("category") || "OPEN";
    const gender = searchParams.get("gender") || "Gender-Neutral";
    const quota = searchParams.get("quota") || "OS";
    const rankType = searchParams.get("rankType") || "mains";
    const email = searchParams.get("user") || "Candidate";

    const client = await clientPromise;
    const col = client.db("rank_predictor").collection("jee_cutoffs");

    // 1. BROAD QUERY: Fetching everything relevant for NIT/IIIT/GFTI
    const query = {
        type: rankType === "advanced" ? "IIT" : { $in: ["NIT", "IIIT", "GFTI"] },
        category: category,
        gender: gender
    };
    if (rankType !== "advanced" && quota !== "ALL") query.quota = quota;

    const docs = await col.find(query).toArray();
    let uniqueResults = [];

    docs.forEach(doc => {
        const rounds = Object.entries(doc.rounds).map(([r, v]) => ({ round: Number(r), ...v }));
        if (rounds.length > 0) {
            const bestRound = rounds.sort((a, b) => b.crank - a.crank)[0];
            const cRank = bestRound.crank;
            const tier = INSTITUTE_TIER[doc.institute] ?? 5;

            // SMART FILTER: Only include colleges within a 10,000 rank window of interest
            // This prevents showing irrelevant data while ensuring 100+ results
            if (cRank >= (rank * 0.2) && cRank <= (rank + 15000)) {
                const diff = cRank - rank;
                let chance = 0;

                // GRANULAR LOGIC: Prevents "Wall of 98%"
                if (diff > 2000) {
                    // Safe Zone: Gradual increase based on distance
                    chance = 88 + Math.min(10, (diff / 2000)); 
                } else if (diff >= 0) {
                    // Target Zone: 65% to 88%
                    chance = 65 + (diff / 2000) * 23;
                } else {
                    // Reach Zone: Drops from 64% down to 5%
                    chance = Math.max(5, 65 - (Math.abs(diff) / 1000) * 15);
                }

                uniqueResults.push({
                    institute: doc.institute,
                    program: doc.program,
                    crank: cRank,
                    chance: Math.round(chance),
                    tier: tier,
                    diff: diff
                });
            }
        }
    });

    // Grouping by your 3 Levels
    const high = uniqueResults.filter(r => r.diff > 1500).sort((a,b) => a.tier - b.tier).slice(0, 45);
    const med = uniqueResults.filter(r => r.diff >= -500 && r.diff <= 1500).sort((a,b) => a.tier - b.tier).slice(0, 45);
    const low = uniqueResults.filter(r => r.diff < -500).sort((a,b) => b.crank - a.crank).slice(0, 45);

    // 2. PDF GENERATION
    const pdfDoc = await PDFDocument.create();
    const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    
    let page = pdfDoc.addPage([600, 850]);
    let y = 800;

    const addNewPage = () => { page = pdfDoc.addPage([600, 850]); y = 800; return page; };

    // --- PREMIUM HEADER ---
    page.drawRectangle({ x: 0, y: 740, width: 600, height: 110, color: rgb(0.02, 0.1, 0.25) });
    page.drawText("PRO ADMISSION ANALYSIS REPORT", { x: 40, y: 805, size: 22, font: bold, color: rgb(1, 1, 1) });
    page.drawText("jeerankpredictor.in | Comprehensive Counseling Strategy", { x: 40, y: 785, size: 10, font: font, color: rgb(0.8, 0.8, 0.8) });

    // --- PERSONALIZED USER BOX ---
    y = 720;
    page.drawRectangle({ x: 40, y: 640, width: 520, height: 75, color: rgb(0.95, 0.96, 0.98) });
    const userDetails = [
        `Candidate: ${email}`,
        `Rank: ${rank} (${rankType.toUpperCase()}) | Quota: ${quota}`,
        `Category: ${category} | Gender: ${gender}`
    ];
    let detailY = 690;
    userDetails.forEach(text => {
        page.drawText(text, { x: 55, y: detailY, size: 10, font: bold, color: rgb(0.1, 0.1, 0.3) });
        detailY -= 18;
    });

    y = 620;

    const drawSection = (title, list, color) => {
        if (list.length === 0) return;
        if (y < 150) addNewPage();
        
        y -= 20;
        page.drawRectangle({ x: 40, y: y - 5, width: 520, height: 24, color });
        page.drawText(title, { x: 50, y: y, size: 11, font: bold, color: rgb(1, 1, 1) });
        
        y -= 35;
        page.drawText("INSTITUTE", { x: 50, y, size: 9, font: bold });
        page.drawText("PROGRAM", { x: 250, y, size: 9, font: bold });
        page.drawText("CUTOFF", { x: 470, y, size: 9, font: bold });
        page.drawText("CHANCE", { x: 520, y, size: 9, font: bold });
        y -= 15;

        list.forEach(item => {
            const instLines = wrapText(item.institute, font, 8, 190);
            const progLines = wrapText(item.program, font, 7, 210);
            const rowHeight = Math.max(instLines.length, progLines.length) * 11 + 5;
            
            if (y < 60) { addNewPage(); y = 800; }
            
            let ty = y;
            instLines.forEach(l => { page.drawText(l, { x: 50, y: ty, size: 8, font }); ty -= 10; });
            ty = y;
            progLines.forEach(l => { page.drawText(l, { x: 250, y: ty, size: 7, font }); ty -= 10; });
            
            page.drawText(String(item.crank), { x: 470, y: y, size: 9, font });
            
            let pColor = item.chance > 80 ? rgb(0, 0.4, 0) : item.chance > 50 ? rgb(0.7, 0.4, 0) : rgb(0.8, 0, 0);
            page.drawText(`${item.chance}%`, { x: 520, y: y, size: 10, font: bold, color: pColor });
            
            y -= rowHeight;
            page.drawLine({ start: { x: 40, y: y + 2 }, end: { x: 560, y: y + 2 }, thickness: 0.1, color: rgb(0.8, 0.8, 0.8) });
        });
        y -= 10;
    };

    drawSection("LEVEL 1: SAFE SEATS (HIGH PROBABILITY)", high, rgb(0.1, 0.5, 0.2));
    drawSection("LEVEL 2: TARGET SEATS (MODERATE PROBABILITY)", med, rgb(0.8, 0.5, 0));
    drawSection("LEVEL 3: REACH SEATS (LOW PROBABILITY)", low, rgb(0.7, 0, 0));

    // Footer
    const pages = pdfDoc.getPages();
    pages.forEach((p, idx) => {
        p.drawText(`Page ${idx + 1} of ${pages.length} | Personalized Analysis | visit jeerankpredictor.in`, {
            x: 180, y: 25, size: 8, font: font, color: rgb(0.5, 0.5, 0.5)
        });
    });

    const pdfBytes = await pdfDoc.save();
    return new Response(pdfBytes, {
        headers: { 
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename="JEE_Pro_Report-${rank}.pdf"`
        }
    });
}