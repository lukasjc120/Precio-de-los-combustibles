import express from "express";
import cors from "cors";

import estacionesRouter from "./routes/estaciones.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/estaciones", estacionesRouter);

app.get("/", (req, res) => {
    res.send("API Precio Nafta");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`);
});