const express = require("express");
require("dotenv").config();

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
    name: "Michael Davila"
  });
});

// About page
app.get("/about", (req, res) => {
  res.render("about", {
    name: "Michael Davila"
  });
});

/* Start server */
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
