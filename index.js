const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("a discord_bot");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = app;