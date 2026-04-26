
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const pdfParse = require("pdf-parse");
//console.log("pdfParse import:", require("pdf-parse"));

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());
app.use(express.json());

/* Root route */
app.get("/", (req, res) => {
  res.send("Backend is running");
});

/* Contact Form Route */
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("New Contact Form Submission:");
  console.log({ name, email, message });

  res.json({ success: true, message: "Message received!" });
});

/* Helper function for Gemini */
const callGemini = async (text, prompt = "Analyze this resume") => {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `
You are an expert resume reviewer.

Your job is to analyze resumes and provide:
- clear weaknesses
- actionable improvements
- rewritten examples when helpful

Be concise but specific.

Format your response in sections:
1. Weaknesses
2. Improvements
3. Example Rewrite (if applicable)

Resume:
${text}

User Request:
${prompt}

Give clear, actionable, and concise feedback.
                `,
              },
            ],
          },
        ],
      }),
    }
  );

  const data = await response.json();
  console.log("Gemini Response:", JSON.stringify(data, null, 2));

  return (
    data?.candidates?.[0]?.content?.parts?.[0]?.text ||
    data?.error?.message ||
    "No valid response from AI"
  );
};

/* AI Analyze Route (text-based) */
app.post("/analyze", async (req, res) => {
  const { text, prompt } = req.body;

  try {
    const reply = await callGemini(text, prompt);
    res.json({ reply });
  } catch (err) {
    console.error("AI Error:", err);
    res.status(500).json({ error: "AI request failed" });
  }
});

/* Upload + Analyze PDF */
app.post("/upload", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Extract text from PDF
    // const pdfData = await pdfParse(req.file.buffer);
    const pdfData = await pdfParse(req.file.buffer);

    const text = pdfData.text;

    if (!text || text.trim().length === 0) {
      return res.status(400).json({ error: "Could not extract text from PDF" });
    }

    // Send extracted text to Gemini
    const reply = await callGemini(text, "Analyze my full resume");

    res.json({ reply });

  } catch (err) {
    console.error("Upload Error:", err);
    res.status(500).json({ error: "Failed to process PDF" });
  }
});

/* Start server */
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});



/* Temporary route for ListModels */
// app.get("/models", async (req, res) => {
//   try {
//     const response = await fetch(
//       `https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`
//     );

//     const data = await response.json();
//     res.json(data);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch models" });
//   }
// });

