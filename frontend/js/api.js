/* =====================================================
   API
===================================================== */

const API_URL = "http://localhost:3000/api";

async function obtenerEstaciones() {

    try {

        const response = await fetch(`${API_URL}/estaciones`);

        if (!response.ok) {
            throw new Error("No se pudieron obtener las estaciones.");
        }

        return await response.json();

    } catch (error) {

        console.error(error);

        mostrarToast("Error al conectar con el servidor.", "danger");

        return [];

    }

}

async function obtenerEstadisticas() {

    try {

        const response = await fetch(`${API_URL}/estadisticas`);

        if (!response.ok) {
            throw new Error("Error al obtener estadísticas.");
        }

        return await response.json();

    } catch (error) {

        console.error(error);

        return null;

    }

}