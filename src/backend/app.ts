import express from "express";
import cors from "cors";

const app = express();
const PORT = 8000;
const allowedOrigins = ["http://localhost:19006"];
const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(corsOptions));

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
