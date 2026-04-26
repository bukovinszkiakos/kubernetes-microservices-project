const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Auth Service is running");
});

app.get("/validate", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/login", (req, res) => {
  res.json({
    message: "User authenticated successfully",
    user: "demo-user"
  });
});

app.listen(PORT, () => {
  console.log(`Auth service running on port ${PORT}`);
});