import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const dirPath = path.dirname(fileURLToPath(import.meta.url));
const htmlFilePath = path.join(dirPath, "public");
app.use(express.static(htmlFilePath));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: htmlFilePath });
});

app.get("/about", (req, res) => {
  res.sendFile("index.html", { root: htmlFilePath });
});

app.get("/login", (req, res) => {
  res.sendFile("index.html", { root: htmlFilePath });
});

app.use((req, res) => {
  res.status(404).sendFile("notFound.html", { root: htmlFilePath });
});

app.listen(5500, () => {
  console.log("Server running on http://localhost:5500");
});
