

const express = require("express");
require("dotenv").config();

const OpenAI = require("openai");
const profile = require("./data/profile");
const systemPrompt = require("./ai/systemPrompt");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});


const app = express();
const port = process.env.PORT || 3000;

/* Tell Express to use EJS */
app.set("view engine", "ejs");

/* Tell Express where static files live */
app.use(express.static("public"));

/* ROUTES */

// Home page
app.get("/", (req, res) => {
  res.render("home", {
    name: profile.basics.fullName,
    role: profile.basics.role
  });
});

// About page
app.get("/about", (req, res) => {
  res.render("about", {
    profile
  });
});

app.use(express.json());

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

    res.json({
      answer: completion.choices[0].message.content
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI request failed." });
  }
});

app.get("/chat", (req, res) => {
  res.render("chat", { name: profile.basics.fullName });
});


/* Start server */
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
