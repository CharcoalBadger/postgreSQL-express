const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db/queries");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const search = req.query.search; // Get the search parameter from the URL
  const usernames = await db.getAllUsernames(search);

  console.log("Usernames:", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
});

app.get("/new", (req, res) => {
  res.render("createUser");
});

app.get("/delete", async (req, res) => {
  await db.deleteAllUsernames();
  console.log("✅ All usernames deleted from the database.");
  res.send("✅ All usernames have been deleted!");
});

app.post("/new", async (req, res) => {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
