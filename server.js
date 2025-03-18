const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs"); // Using EJS for the form view
app.set("views", path.join(__dirname, "views"));

// Routes
app.get("/", (req, res) => {
  console.log("usernames will be logged here - wip"); // Placeholder
  res.send("Check the console for usernames - WIP");
});

app.get("/new", (req, res) => {
  res.render("createUser"); // Render the form
});

app.post("/new", (req, res) => {
  console.log("username to be saved:", req.body.username);
  res.redirect("/");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
