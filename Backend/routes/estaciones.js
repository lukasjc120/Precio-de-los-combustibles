import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {

        const [rows] = await pool.query(`
            SELECT
                e.id,
                e.empresa,
                e.provincia,
                e.localidad,
                e.direccion,
                p.combustible,
                p.precio
            FROM estaciones e
            JOIN precios p
                ON e.id = p.estacion_id
            ORDER BY e.empresa
        `);

        res.json(rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensaje: "Error al obtener estaciones"
        });

    }
});

export default router;