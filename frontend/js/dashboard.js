/* =====================================================
   DASHBOARD
===================================================== */

function actualizarDashboard(datos) {

    if (!datos || datos.length === 0) return;

    const promedio =

        datos.reduce((a, b) => a + Number(b.precio), 0)

        / datos.length;

    document.getElementById("precioPromedio").textContent =

        formatearPrecio(promedio);

    const estaciones =

        new Set(datos.map(item => item.id));

    document.getElementById("totalEstaciones").textContent =

        estaciones.size;

    const empresas =

        new Set(datos.map(item => item.empresa));

    document.getElementById("totalEmpresas").textContent =

        empresas.size;

    const combustibles =

        new Set(datos.map(item => item.combustible));

    document.getElementById("totalCombustibles").textContent =

        combustibles.size;

}