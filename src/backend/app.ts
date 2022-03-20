import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hello from the Server side <3");
});

app.get("/api/recipes", (req, res) => {
  res.json({ data: "Here comes the recipes from the server." });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running successfully at http://localhost:${PORT}`);
});
