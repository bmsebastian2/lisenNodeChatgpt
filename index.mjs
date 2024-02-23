import express from "express";
import path from "path";

const app = express();
const port = 3030;

// Configurar el directorio de archivos estáticos
app.use(
  express.static(path.resolve(new URL(import.meta.url).pathname, "../public"))
);
// Ruta para servir el archivo CSS
app.get("/styles.css", (req, res) => {
  res.sendFile(path.resolve("public", "styles.css"));
});
// Ruta para servir el archivo CSS
app.get("/app.js", (req, res) => {
  res.sendFile(path.resolve("public", "app.js"));
});
// Ruta para servir el archivo HTML
app.get("/", (req, res) => {
  res.sendFile(path.resolve("public", "index.html"));
});
// res.sendFile(path.join(__dirname, "public", "index.html"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
