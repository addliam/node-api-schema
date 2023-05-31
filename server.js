const express = require("express");
const app = express();

const PORT = 8088 | process.env.NODE_PORT;
const HOST = "127.0.0.1";

const libroRoutes = require("./routes/libroRoutes");

app.use(express.json());
app.use("", libroRoutes);
app.get("/", async (req, res) => {
  return res.status(200).json({ message: "Servidor corriendo correctamente" });
});

// Iniciamos el servidor
app.listen(PORT, HOST, () => {
  console.log(`Servidor iniciado en http://${HOST}:${PORT}`);
});
