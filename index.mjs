import express from "express";

const app = express();
const port = 3030;

app.get("/", (req, res) => {
  res.send("Hello World!s");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
