import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";
import { Resend } from "resend";

import profile from "./data/profile.js";
import systemPrompt from "./ai/systemPrompt.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const resend = new Resend(process.env.RESEND_API_KEY);

/* Middleware */
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* View engine */
app.set("view engine", "ejs");

/* Routes */

app.get("/", (req, res) => {
  res.render("home", {
    name: profile.basics.fullName,
    role: profile.basics.role
  });
});

app.get("/about", (req, res) => {
  res.render("about", { profile });
});

app.get("/projects", (req, res) => {
  res.render("projects", { profile });
});

app.get("/contact", (req, res) => {
  res.render("contact", { query: req.query });
});

app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Required fields
  if (!name || !email || !message) {
    return res.status(400).send("Name, email, and message are required.");
  }

  // Optional subject with safe default
  const finalSubject = subject && subject.trim()
    ? `[Portfolio] ${subject.trim()}`
    : "[Portfolio] New Contact Message";

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["daijinhao.contact@gmail.com"],
      subject: finalSubject,
      html: `
        <h3>${finalSubject}</h3>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `
    });

    // Redirect back with success flag
    res.redirect("/contact?sent=true");

  } catch (err) {
    console.error("Resend error:", err);
    res.status(500).send("Failed to send message.");
  }
});


/* AI route (unchanged logic) */
app.post("/ask", async (req, res) => {
  const userQuestion = req.body.question;
  if (!userQuestion) {
    return res.status(400).json({ error: "Question is required." });
  }

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: `
PROFILE DATA:
${JSON.stringify(profile, null, 2)}

QUESTION:
${userQuestion}
          `
        }
      ],
      temperature: 0.5
    });

    res.json({ answer: completion.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI request failed." });
  }
});

/* Start server */
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
