const express = require("express");

const app = express();
const PORT = process.env.PORT || 3002;

const AUTH_URL = process.env.AUTH_URL || "http://localhost:3000";

app.get("/health", (req, res) => {
  res.send("HR Service is running");
});

app.get("/", async (req, res) => {
  try {
    const response = await fetch(`${AUTH_URL}/validate`);
    const data = await response.json();

    res.json({
      message: "HR service working",
      authResponse: data
    });
  } catch (error) {
    res.status(500).json({
      error: "Auth service call failed"
    });
  }
});

app.listen(PORT, () => {
  console.log(`HR service running on port ${PORT}`);
});
