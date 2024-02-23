import express from "express";
import path from "path";

const app = express();
const port = 3030;

app.use(express.static(path.resolve(new URL(import.meta.url).pathname, '../view')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
